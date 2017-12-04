// Include the Axios library for HTTP requests
import axios from "axios";

// Helper Functions
const helpers = {
  //first do a call to the api/stocks route to return the list of stocks from database
  getSavedStocks: function() {
    return (
      axios
        .get("/api/stocks")
        .then(function(results) {
          var data = results.data;
          // console.log("this is data array", data);
          var tickerArray = [];
          //loop over the database array to extract the value which is the string ticker symbol of each stock
          for (var i = 0; i < data.length; i++) {
            var tickerSymbol = Object.values(data[i]).pop();
            tickerArray.push(tickerSymbol);
           
          }
           return tickerArray;
        })
        //pass through the array of ticker symbols into a for loop where every ticker symbol will do a get request to the API to return pricing data ***NOT WORKING***
       
    // .then(function(tickerArray) {
    // console.log("this is ticker array", tickerArray);
    //           // var tickerData = tickerArray["0"];
    //           return Promise.all(tickerArray.map(tik => {
    //               // let tickerData = tik;  // need to find out the data type here.
    //               return axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + tik +
    //                         "&interval=1min&apikey=768XGV67OZVODVUO");
    //           }));
    //       })








// ******ORIGINAL*********
        // .then(function(tickerArray) {
        //   console.log("this is ticker array", tickerArray);
        //   var tickerData = tickerArray[0];
        //   for (let j = 0; j < tickerData.length; j++) {
        //     console.log("tickerData length", tickerData.length);
        // return axios.get(
        //       "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" +
        //         tickerData[j] +
        //         "&interval=1min&apikey=768XGV67OZVODVUO"
        //     );
        //   }
        // })




 // .then(function(tickerArray) {
 //          console.log("this is ticker array", tickerArray);
 //          var tickerData = tickerArray["0"];
 //          for (let j = 0; j < tickerData.length; j++) {
 //            console.log("tickerData length", tickerData.length);
 //          }
 //            return Promise.all([
 //                axios.get(
 //                    "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol= AAPL&interval=1min&apikey=768XGV67OZVODVUO"
 //                );
 //                axios.get(
 //                    "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT &interval=1min&apikey=768XGV67OZVODVUO"

 //                );
 //            ])
 //        })

        // .then(function(tickerArray) {
        //   var tickerData = tickerArray["0"];
        //   console.log("this is tickerData", tickerData);
        //   tickerData.forEach(function(tickerdata) {
        //     return axios.get(
        //       "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" +
        //         tickerData +
        //         "&interval=1min&apikey=768XGV67OZVODVUO"
        //     );
        //   });
        // })

        //Extract the final price from each stock and return with stock name in an array to send to src/components/stocks.js
        // .then(function(response) {
        //   var stockPrices = response.data["Time Series (1min)"];
        //   console.log("these are the stock prices", stockPrices);
        //   const latestPrice = stockPrices[Object.keys(stockPrices)[0]];
        //   var stockName = response.data["Meta Data"]["2. Symbol"];
        //   console.log("This is stock name", stockName);
        //   console.log(
        //     "From getSavedStocks, this is the final price",
        //     latestPrice["4. close"]
        //   );
        //   return [stockName, latestPrice["4. close"]];
        // })
    );
  }

  // ***********THIS WAS A HARDCODED TESTING FUNCTION FOR AXIOS CALL THAT IS NOT IN USE BUT I DO NOT WISH TO DELETE UNTIL THE OTHER METHOD IS WORKING PROPERLY.  THIS METHOD IS ALSO NOT RETURNING BOTH STOCKS IN ARRAY, ONLY THE FIRST***************************

  // var test = Object.keys(data).map(function (date) { return [date, data[date]["4. close"]] })
  // realTimeQuotes: function() {
  //   // Hardcoded Stocks for testing
  //   var stocks = ["AAPL", "CME"];

  //   for (var i = 0; i < stocks.length; i++) {
  //     return axios
  //       .get(
  //         "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" +
  //           stocks[i] +
  //           "&interval=1min&apikey=768XGV67OZVODVUO"
  //       )
  //       .then(function(response) {
  //         const stockPrices = response.data["Time Series (1min)"];
  //         const stockName = response.data["Meta Data"][ "2. Symbol" ]
  //         console.log("other name", stockName)
  //         const latestPrice = stockPrices[Object.keys(stockPrices)[0]];
  //         console.log("this is the final price -----", latestPrice["4. close"]);
  //         return latestPrice["4. close"];
  //       });
  //   }
  // }
};

// We export the helpers function
export default helpers;
