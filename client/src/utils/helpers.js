// Include the Axios library for HTTP requests
import axios from "axios";

// Alpha Advantage API Key
var APIKey = "768XGV67OZVODVUO";

// Helper Functions
const helpers = {

    getSavedStocks: function() {
    return axios.get("/api/stocks")
      .then(function(results) {
        var data = results.data
        var tickerArray = []
        // console.log("axios results", results.data);
        for (var i = 0; i < data.length; i++) {
           var tickerSymbol = Object.values(data[i]).pop()
           tickerArray.push(tickerSymbol)
            // console.log("this is ticker array", tickerArray)
            for (var j = 0; j < tickerArray.length; j++) {
              return axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="+tickerArray[j]+"&interval=1min&apikey=768XGV67OZVODVUO")
              .then(function(response) {
                var stockPrices = response.data['Time Series (1min)'];
                var stockName = response.data["Meta Data"]["2. Symbol"]
                console.log("This is stock name", stockName )
              })
            }
        } 
        return tickerArray;
      })
      // .then(function(){
      //   console.log("say hello", tickerArray)
      // })
     },
// var test = Object.keys(data).map(function (date) { return [date, data[date]["4. close"]] })
  realTimeQuotes: function() {

    // Hardcoded Stocks for testing
    var stocks = ["AAPL", "CME"]
   
    for (var i = 0; i < stocks.length; i++) {
      
     return axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="+stocks[i]+"&interval=1min&apikey=768XGV67OZVODVUO")
    .then(function(response) {

      const stockPrices = response.data['Time Series (1min)'];

      const latestPrice = stockPrices[Object.keys(stockPrices)[0]]
      console.log('this is the final price -----', latestPrice['4. close']);
      return latestPrice['4. close']
    
    });
 }
 }
}

// We export the helpers function
export default helpers;