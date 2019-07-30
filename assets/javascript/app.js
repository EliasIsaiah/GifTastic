$(document).ready(function () {

    let giphyJSON = null;
    let apiKey = "Uhn8mVWdgQYbSvuPCeCAC6ybnhmN7JPg";
    let topics = ["Peggy Hill", "Bobby Hill", "Hank Hill", "Boomhauer", "Luanne Platter", "Bill Dauterive"];
    let queryURL = "";
    let ratings = ["g", "pg", "pg-13", "r"];
    let gifLimit = 5;


    queryURL = `https://api.giphy.com/v1/gifs/search?q=${topics[0]}&rating=${ratings[0]}&limit=${gifLimit}&api_key=${apiKey}`;


    function testGet(route) {
       return $.get(route).then(function (apiData) {
            giphyJSON = apiData;
        })
    }

    testGet(queryURL);


});

