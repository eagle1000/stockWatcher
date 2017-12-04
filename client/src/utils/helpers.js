// Include the Axios library for HTTP requests
import axios from "axios";

// Helper Functions
const helpers = {
  // Method for rendering Hot Stocks
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
        //pass through the array of ticker symbols into a for loop where every ticker symbol will do a get request to the API to return pricing data
        .then(async (tickerArray) => {
          console.log("this is ticker array", tickerArray);
          var tickerData = tickerArray["0"];
          let returnedData = []
          for (let j = 0; j < tickerData.length; j++) {
            console.log("tickerData length", tickerData.length);
            let stockInfo = await axios.get(
              "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" +
                tickerData[j] +
                "&interval=1min&apikey=768XGV67OZVODVUO"
            );
            returnedData.push(stockInfo.data)
            console.log
             console.log('this is stock info', stockInfo)
             console.log('this is returned data', returnedData)
          }
          return returnedData
        })
        //Extract the final price from each stock and return with stock name in an array to send to src/components/stocks.js
        .then(function(returnedData) {
          var stockNamesArray = []
          var stockPriceArray = []
          for (var k = 0; k < returnedData.length; k++) {
            var stockNames = returnedData[k]["Meta Data"]["2. Symbol"];
            stockNamesArray.push(stockNames)
            console.log("this is stock names array", stockNamesArray)
          }

          for (var l = 0; l < returnedData.length; l++) {
            var stockPrices = returnedData[l]["Time Series (1min)"];
            console.log('these are stock prices', stockPrices)      
              const latestPrice = stockPrices[Object.keys(stockPrices)[0]];
               console.log('this is latest price', latestPrice)
               const realTimePrice = latestPrice["4. close"];
               console.log('this is real time price',realTimePrice);
               stockPriceArray.push(realTimePrice)
               console.log('this is stock price array', stockPriceArray)
          }
          let finalArray = []
          for(var i = 0; i < stockPriceArray.length; i ++ ){
            let stockDetails = stockNamesArray[i] + " : " + stockPriceArray[i]
            finalArray.push(stockDetails)
          }
          return finalArray
        })
    );
  },
// Helper Method for rendering stocks tracked by user
getUserStocks: function() {

    return (
      axios
        .get("/api/stocks/:id")
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
      )
}
};

// We export the helpers function
export default helpers;
