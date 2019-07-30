$(document).ready(function () {

    const $container = $("div.container");

    let giphyJSON = null;
    let apiKey = "Uhn8mVWdgQYbSvuPCeCAC6ybnhmN7JPg";
    let topics = ["Peggy Hill", "Bobby Hill", "Hank Hill", "Boomhauer", "Luanne Platter", "Bill Dauterive"];
    let queryURL = "";
    let ratings = ["g", "pg", "pg-13", "r"];
    let gifLimit = 5;

    function buildAppDOM() {
        topics.forEach(starterButton => {
            let newButton = $("<div>")
            .addClass("btn btn-primary")
            .attr("data-value", starterButton)
            .text(starterButton)
            .on("click", buttonClickQuery);

            $("div.buttonsDiv").append(newButton);
        })
    }

    queryURL = `https://api.giphy.com/v1/gifs/search?q=${topics[0]}&rating=${ratings[0]}&limit=${gifLimit}&api_key=${apiKey}`;

    function buttonClickQuery() {
        console.log("nothing here yet!");
    }

    function testGet(route) {
        return $.get(route).then(function (apiData) {
            giphyJSON = apiData;
        })
    }

    testGet(queryURL);
    buildAppDOM();

});