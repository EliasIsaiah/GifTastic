$(document).ready(function () {

    const $container = $("div.container");

    let giphyJSON = null;
    let apiKey = "Uhn8mVWdgQYbSvuPCeCAC6ybnhmN7JPg";
    let topics = ["Peggy Hill", "Bobby Hill", "Hank Hill", "Boomhauer", "Luanne Platter", "Bill Dauterive"];
    let queryURL = `https://api.giphy.com/v1/gifs/search?&api_key=${apiKey}`;
    let ratings = ["g", "pg", "pg-13", "r"];
    let gifLimit = 5;

    function buildDefaultDOM() {
        topics.forEach(defaultButton => {
            let newButton = $("<div>")
                .addClass("btn btn-primary m-1 gifButton")
                .attr("data-value", defaultButton)
                .text(defaultButton)
                .on("click", buttonClickQuery);

            $("div.buttonsDiv").append(newButton);
        })
    }

    function buttonClickQuery() {
        let queryAdd = encodeURIComponent($(this).attr("data-value"));
        let newQueryURL = queryURL + "&q=" + queryAdd + "&limit=" + gifLimit;

        buildGifsDOM(newQueryURL);
    }

    function buildGifsDOM(url) {
        $.get(url).then(gifObject => {
            gifObject.data.forEach(element => {
                // console.log(element.images.downsized_still.url);
                $newImg = $("<img>")
                    .addClass("gifImg")
                    .attr("src", element.images.downsized_still.url)
                    .attr("data-animatedUrl", element.images.downsized.url)
                    .attr("data-stillUrl", element.images.downsized_still.url)
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
                $("div.gifs").prepend($newImg);
            })
        })
    }

    // function gifHover() {
    //     $(this).attr("src", $(this).attr("data-animatedUrl"));
    // }

    // function stopGifHover() {

    //     $(this).attr("src", $(this).attr("data-stillUrl"));
    // }


    function getGifObject(route) {
        $.get(route).then(function (apiData) {
            console.log(apiData);
            return apiData.data;
        })
    }

    buildDefaultDOM();

});