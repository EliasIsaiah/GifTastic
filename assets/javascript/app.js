$(document).ready(function () {

    const $container = $("div.container");

    let giphyJSON = null;
    let apiKey = "Uhn8mVWdgQYbSvuPCeCAC6ybnhmN7JPg";
    let topics = ["Peggy Hill", "Bobby Hill", "Hank Hill", "Boomhauer", "Luanne Platter", "Bill Dauterive"];
    let queryURL = `https://api.giphy.com/v1/gifs/search?&api_key=${apiKey}`;
    let ratings = ["g", "pg", "pg-13", "r"];
    let gifLimit = 5;

    function buildDefaultDOM() {
        topics.forEach(starterButton => {
            let newButton = $("<div>")
                .addClass("btn btn-primary")
                .attr("data-value", starterButton)
                .text(starterButton)
                .on("click", buttonClickQuery);

            $("div.buttonsDiv").append(newButton);
        })
    }


    function buttonClickQuery() {
        console.log("nothing here yet!");
        _this = $(this);
        console.log(_this);
        let queryAdd = encodeURIComponent($(this).attr("data-value"));
        let newQueryURL = queryURL + "&q=" + queryAdd;
        console.log(newQueryURL);
    }

    function testGet(route) {
        return $.get(route).then(function (apiData) {
            giphyJSON = apiData;
        })
    }

    testGet(queryURL);
    buildDefaultDOM();

});