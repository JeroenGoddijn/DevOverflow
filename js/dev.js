// Alpha Vantage api used to display stock information
$(function () {
    // Variables used to piece together a full url
    let url1 = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=";
    let url2 = "&interval=5min&apikey=";
    let key = "Y0OGXTIL1HLOXYEP";

    // Url's from loop stored here
    let url = [];
    function together() {
        let companies = ["MSFT", "AAPL", "GOOGL", "FB", "TSLA", "AMZN", "HPQ", "GPRO"];
        for (i = 0; i < companies.length; i++) {
            let currentTicker = companies[i];
            let mkUrl = url1 + currentTicker + url2 + key;
            console.log(mkUrl);
            url.push(mkUrl)

            $.get(url[i])
                .done((response) => {
                    console.log(response)
                    let display = response["Time Series (5min)"]["2019-05-28 13:00:00"]["4. close"];
                    console.log(display);
                    // $("#api").append(response);
                    // console.log(new Date());
                    console.log('#' + currentTicker);
                    $('#' + currentTicker).html(display);
                })
            // return 
        }
    }
together()
})


// url + SMA + key
// getDate()

// function getDate(){
// // Date
// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();
// today = yyyy + "-" + mm + "-" + dd;
// console.log(today);

// // Time
// let date = new Date();
// let ourSentence = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
// console.log(ourSentence);
// }