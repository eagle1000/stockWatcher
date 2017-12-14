// Include the Axios library for HTTP requests
import axios from "axios";

// Helper Functions
const helpers = {
  // Method for rendering Hot Stocks
  //first do a call to the api/stocks route to return the list of stocks from database
  getEveryUNeed: function() {
    return axios.get("/api/news");
  },

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
        .then(async tickerArray => {
          // console.log("this is ticker array", tickerArray);
          var tickerData = tickerArray["0"];
          let returnedData = [];
          for (let j = 0; j < tickerData.length; j++) {
            // console.log("tickerData length", tickerData.length);
            let stockInfo = await axios.get(
              "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" +
                tickerData[j] +
                "&interval=1min&apikey=768XGV67OZVODVUO"
            );
            // console.log("TODO Show chartable version of: ", stockInfo.data["Time Series (1min)"])
            returnedData.push(stockInfo.data);
            // console.log('this is stock info', stockInfo)
            // console.log('this is returned data', returnedData)
          }
          return returnedData;
        })
        //Extract the final price from each stock and return with stock name in an array to send to src/components/stocks.js
        .then(function(returnedData) {
          var stockNamesArray = [];
          var stockPriceArray = [];
          for (var k = 0; k < returnedData.length; k++) {
            var stockNames = returnedData[k]["Meta Data"]["2. Symbol"];
            stockNamesArray.push(stockNames);
            // console.log("this is stock names array", stockNamesArray)
          }

          for (var l = 0; l < returnedData.length; l++) {
            var stockPrices = returnedData[l]["Time Series (1min)"];
            // console.log('these are stock prices', stockPrices)
            const latestPrice = stockPrices[Object.keys(stockPrices)[0]];
            // console.log('this is latest price', latestPrice)
            const realTimePrice = latestPrice["4. close"];
            // console.log('this is real time price',realTimePrice);
            stockPriceArray.push(realTimePrice);
            // console.log('this is stock price array', stockPriceArray)
          }
          let finalArray = [];
          for (var i = 0; i < stockPriceArray.length; i++) {
            let stockDetails = stockNamesArray[i] + " : " + stockPriceArray[i];
            finalArray.push(stockDetails);
          }
          return finalArray;
        })
    );
  },
  // Helper Method for rendering stocks tracked by user
  saveUserStocks: function(id, stocks) {
    return axios.put("/api/stocks/" + id, {"stocks": stocks})
    .then(function(results){
      console.log("axios results", results)
      return results
    })
  },

  getUserStocks: function(id) {
    return (
      axios
        .get("/api/stocks/" + id)
        .then(function(results) {
          var userData = results.data;
          console.log("this is data array", userData);
          // var userTickerArray = [];
          // //loop over the database array to extract the value which is the string ticker symbol of each stock
          // for (var i = 0; i < userData.length; i++) {
          //   var userTickerSymbol = Object.values(userData[i]).pop();
          //   userTickerArray.push(userTickerSymbol);
          // }
          return userData;
        })
        //pass through the array of ticker symbols into a for loop where every ticker symbol will do a get request to the API to return pricing data
        .then(async userTickerArray => {
          console.log("this is ticker array", userTickerArray);
          var userTickerData = userTickerArray;
          let userReturnedData = [];
          for (let j = 0; j < userTickerData.length; j++) {
            console.log("userTickerData length", userTickerData.length);
            let userStockInfo = await axios.get(
              "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" +
                userTickerData[j] +
                "&interval=1min&apikey=768XGV67OZVODVUO"
            );
            userReturnedData.push(userStockInfo.data);
            console.log("this is stock info", userStockInfo);
            console.log("this is returned data", userReturnedData);
          }
          return userReturnedData;
        })
        //Extract the final price from each stock and return with stock name in an array to send to src/components/stocks.js
        .then(function(userReturnedData) {
          var userStockNamesArray = [];
          var userStockPriceArray = [];
          for (var k = 0; k < userReturnedData.length; k++) {
            var userStockNames = userReturnedData[k]["Meta Data"]["2. Symbol"];
            userStockNamesArray.push(userStockNames);
            // console.log("this is stock names array", userStockNamesArray)
          }

          for (var l = 0; l < userReturnedData.length; l++) {
            var userStockPrices = userReturnedData[l]["Time Series (1min)"];
            // console.log('these are stock prices', userStockPrices)
            const userLatestPrice =
              userStockPrices[Object.keys(userStockPrices)[0]];
            // console.log('this is latest price', userLatestPrice)
            const userRealTimePrice = userLatestPrice["4. close"];
            // console.log('this is real time price',userRealTimePrice);
            userStockPriceArray.push(userRealTimePrice);
            // console.log('this is stock price array', userStockPriceArray)
          }
          let userFinalArray = [];
          for (var i = 0; i < userStockPriceArray.length; i++) {
            let userStockDetails =
              userStockNamesArray[i] + " : " + userStockPriceArray[i];
            userFinalArray.push(userStockDetails);
            console.log(userFinalArray);
          }
          return userFinalArray;
        })
    );
  }

  // getChartPrices: function() {
  //   return (
  //     axios
  //       .get("/api/stocks")
  //       .then(function(results) {
  //         var chartData = results.data;
  //         // console.log("this is data array", data);
  //         var chartTickerArray = [];
  //         //loop over the database array to extract the value which is the string ticker symbol of each stock
  //         for (var i = 0; i < chartData.length; i++) {
  //           var chartTickerSymbol = Object.values(chartData[i]).pop();
  //           chartTickerArray.push(chartTickerSymbol);
  //         }
  //         return chartTickerArray;
  //       })
  //       //pass through the array of ticker symbols into a for loop where every ticker symbol will do a get request to the API to return pricing data
  //       .then(async chartTickerArray => {
  //         console.log("this is chart ticker array", chartTickerArray);
  //         var chartTickerData = chartTickerArray["0"];
  //         let chartReturnedData = [];
  //         for (let j = 0; j < chartTickerData.length; j++) {
  //           // console.log("chartTickerData length", chartTickerData.length);
  //           let chartStockInfo = await axios.get(
  //             "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" +
  //               chartTickerData[j] +
  //               "&interval=1min&apikey=768XGV67OZVODVUO"
  //           );
  //           chartReturnedData.push(chartStockInfo.data);
  //           //  console.log('this is chart stock info', chartStockInfo)
  //           console.log('this is chart returned data', chartReturnedData)
  //         }
  //         var test = [1,2,3,4,5]
  //         return chartReturnedData;
  //       })
  //       .then(function(chartReturnedData) {
  //         var chartDateArray = [];
  //         var chartPriceArray = [];

  //         for (var k = 0; k < chartReturnedData.length; k++) {
  //           var dailyData = chartReturnedData[k]["Time Series (Daily)"];
  //           var dailyData2 = Object.keys(dailyData);
  //           // console.log("this is daily data2", dailyData2)
  //           chartDateArray.push(dailyData2);
  //           // console.log("chart date array", chartDateArray)
  //           var dailyPrice = chartReturnedData[k]["Time Series (Daily)"];
  //           // console.log("this is daily price", dailyPrice)
  //           var dailyPriceSeries = Object.values(dailyPrice);
  //           // console.log("Daily Price Series", dailyPriceSeries);
  //           var chartPrice = dailyPriceSeries.map(function(x) {
  //             return x["4. close"];
  //           });
  //           var chartPrice2;
  //             for (var l = 0; l < chartPrice.length; l++) {
  //               var chartPrice2 = parseInt(chartPrice[l])

  //           // console.log('chart prices', chartPrice)
  //           chartPriceArray.push(chartPrice2);
  //           console.log("this is chart price array", chartPriceArray);
  //         }
  //         }
  //         var test=[1,2,3,4,5]
  //         return test;
  //       })
  //   );
  // }
  // Helpers closing brace
};

// We export the helpers function
export default helpers;
