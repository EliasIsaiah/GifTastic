$(document).ready(function () {

    const $container = $("div.container");

    let giphyJSON = null;
    let apiKey = "Uhn8mVWdgQYbSvuPCeCAC6ybnhmN7JPg";
    let topics = ["Peggy Hill", "Bobby Hill", "Hank Hill", "Luanne Platter", "Bill Dauterive"];
    let queryURL = `https://api.giphy.com/v1/gifs/search?&api_key=${apiKey}`;
    let ratings = ["g", "pg", "pg-13", "r"];
    let selectedRating = "";
    let gifLimit = 5;

    function buildDefaultButtonsDOM() {
        console.log("entered buildButtonDOM");
        topics.forEach(defaultButton => {
            let newButton = $("<div>")
                .addClass("btn btn-primary m-1 gifButton")
                .attr("data-value", defaultButton)
                .text(defaultButton)
                .on("click", buttonClickQuery);

            $("div.buttonsDiv").append(newButton);
        })
    }

    //overloaded to accept userInput parameter

    function buildNewButtonDOM(userInput) {
        let newButton = $("<div>")
            .addClass("btn btn-primary m-1 gifButton")
            .attr("data-value", userInput)
            .text(userInput)
            .on("click", buttonClickQuery);
        $("div.buttonsDiv").append(newButton);
    }


    function buttonClickQuery() {
        let queryAdd = encodeURIComponent($(this).attr("data-value"));
        let newQueryURL = `${queryURL}&q=${queryAdd}&limit=${gifLimit}&rating=${selectedRating}`;

        buildGifsDOM(newQueryURL);
    }

    function buildGifsDOM(url) {
        $.get(url).then(gifObject => {
            gifObject.data.forEach(element => {
                let $newDiv = $("<div>");
                let $newP = $("<p>");
                let $newImg = $("<img>")
                    .addClass("gifImg")
                    .attr({
                        src: element.images.downsized_still.url,
                        "data-animatedUrl": element.images.downsized.url,
                        "data-stillUrl": element.images.downsized_still.url
                    })
                    .on("mouseenter", function () {
                        $(this).attr("src", $(this).attr("data-animatedUrl"));
                    })
                    .on("mouseleave", function () {
                        $(this).attr("src", $(this).attr("data-stillUrl"));

                    })
                    .css({
                        "max-width": "100%",
                        "margin": ".2rem",
                    });
                $newP.text(`Rating : ${element.rating}`);
                $newDiv.append($newImg);
                $newDiv.append($newP);
                $("div.gifs").prepend($newDiv);
            })
        })
    }

    $(window).keydown(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            if ($("input.userInput").val()) {
                buildNewButtonDOM($("input.userInput").val());
            } else
                return false;
        }
    })

    // $("input.userInput").on("")

    $("button.userInputSubmit").on("click", (event) => {
        event.preventDefault();
        buildNewButtonDOM($("input.userInput").val());
        // console.log(`user input: ${$("input.userInput").val()}`)
    });

    buildDefaultButtonsDOM();

});