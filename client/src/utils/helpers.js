// Include the Axios library for HTTP requests
import axios from "axios";

// Alpha Advantage API Key
var APIKey = "768XGV67OZVODVUO";

// Helper Functions
const helpers = {

  // This will run our query. **NOTE** Will need to pass in arguments when states are set
  runQuery: function() {

    // Hardcoded Stocks for testing
    var stocks = ["AAPL", "CME"]
   


    console.log("Query Run");
    //Create a for loop to run the axios query inside in order to grab data from each stock
    // Run a query using Axios. Then return the results as an object with an array.
    // See the Axios documentation for details on how we structured this with the params.
    for (var i = 0; i < stocks.length; i++) {
    	
    
    return axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="+stocks[i]+"&interval=60min&apikey=768XGV67OZVODVUO")
    .then(function(response) {
    	var data = response;
      console.log("Axios Results", data);
      // return results.data.response;
    });
  }
 }
}