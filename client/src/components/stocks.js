import React, { Component } from "react";
import { Link } from "react-router";
// Include the helpers for making API calls
import helpers from "../utils/helpers";
// import Chart from "./Chart.js";
import axios from "axios";

class Stocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotStocks: [],
            // userStocks: [],
            // chartData: {}
        };
        this.savedStocks = this.savedStocks.bind(this);
        // this.userSavedStocks = this.userSavedStocks.bind(this);
        // this.getChartData = this.getChartData.bind(this);
    }

    // getChartData1() {
    //     return (
    //         axios
    //             .get("/api/stocks")
    //             .then(function(results) {
    //                 var chartData = results.data;
    //                 // console.log("this is data array", data);
    //                 var chartTickerArray = [];
    //                 //loop over the database array to extract the value which is the string ticker symbol of each stock
    //                 for (var i = 0; i < chartData.length; i++) {
    //                     var chartTickerSymbol = Object.values(
    //                         chartData[i]
    //                     ).pop();
    //                     chartTickerArray.push(chartTickerSymbol);
    //                 }
    //                 return chartTickerArray;
    //             })
    //             //pass through the array of ticker symbols into a for loop where every ticker symbol will do a get request to the API to return pricing data
    //             .then(async chartTickerArray => {
    //                 console.log("this is chart ticker array", chartTickerArray);
    //                 var chartTickerData = chartTickerArray["0"];
    //                 let chartReturnedData = [];
    //                 for (let j = 0; j < chartTickerData.length; j++) {
    //                     // console.log("chartTickerData length", chartTickerData.length);
    //                     let chartStockInfo = await axios.get(
    //                         "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" +
    //                             chartTickerData[j] +
    //                             "&interval=1min&apikey=768XGV67OZVODVUO"
    //                     );
    //                     chartReturnedData.push(chartStockInfo.data);
    //                     //  console.log('this is chart stock info', chartStockInfo)
    //                     // console.log(
    //                     //     "this is chart returned data",
    //                     //     chartReturnedData
    //                     // );
    //                 }
    //                 return chartReturnedData;
    //             })
    //             .then(function(chartReturnedData) {
    //                 var chartDateArray = [];
    //                 var chartPriceArray = [];

    //                 for (var k = 0; k < chartReturnedData.length; k++) {
    //                     var dailyData =
    //                         chartReturnedData[k]["Time Series (Daily)"];
    //                     var dailyData2 = Object.keys(dailyData);
    //                     console.log("this is daily data2", dailyData2)
    //                     chartDateArray.push(dailyData2);
    //                     // console.log("chart date array", chartDateArray)
    //                     var dailyPrice =
    //                         chartReturnedData[k]["Time Series (Daily)"];
    //                     // console.log("this is daily price", dailyPrice)
    //                     var dailyPriceSeries = Object.values(dailyPrice);
    //                     // console.log("Daily Price Series", dailyPriceSeries);
    //                     var chartPrice = dailyPriceSeries.map(function(x) {
    //                         return x["4. close"];
    //                     });
    //                     console.log("this is chartPrice", chartPrice)
    //                     var chartPrice2;
    //                     for (var l = 0; l < chartPrice.length; l++) {
    //                         var chartPrice2 = parseInt(chartPrice[l]);

    //                         // console.log('chart prices', chartPrice)
    //                         chartPriceArray.push(chartPrice2);
    //                         console.log("this is chart price array",chartPriceArray);
    //                     } //End chartPriceArray for loop
    //                 }  //End variable k for loop
    //              return chartPriceArray
    //             }) //.then method closing brace
                
    //     ); //closing parenthesis for entire function return
    // }  //closing brace for getChartData function

    // getChartData() {
        
    //     var test = [1,2,3,4,5];
    //     var labelTest = [1, 2, 3, 4, 5];
    //     this.setState({
    //         chartData: {
    //             labels: labelTest,
    //             datasets: [
    //                 {
    //                     data: test
    //                 }
    //             ]
    //         }
    //     });
    // }

    renderHotStocks() {
        return this.state.hotStocks.map(function(item) {
            return <p key={item}>{item}</p>;
        });
    }

    // renderUserStocks() {
    //     return this.state.userStocks.map(function(item) {
    //         return <p key={item}>{item}</p>;
    //     });
    // }

    savedStocks() {
        console.log("we hit savedStocks function starting --");
        helpers.getSavedStocks().then(stocks => {
            // console.log('these are the saved stocks',stocks)
            this.setState({ hotStocks: stocks });
        });
    }

    // userSavedStocks() {
    //     // console.log('we hit savedStocks function starting --');
    //     helpers.getUserStocks().then(mystocks => {
    //         // console.log('these are the saved stocks',stocks)
    //         this.setState({ userStocks: mystocks });
    //     });
    // }

    componentWillMount() {
        this.savedStocks();
        // this.userSavedStocks();
        // this.getChartData();
    }



    render() {
        return (
            <div>
                <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                    <div
                        className="collapse navbar-collapse"
                        id="navbarContent"
                    >
                        <img
                            src="http://embswarsaw.com/wp-content/uploads/2017/06/logo_StockWatch2.png"
                            className="navLogo"
                        />
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/stocks">
                                    <h4>Stocks</h4>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/news">
                                    <h4>News</h4>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="/login"
                                    id="sign-out-button"
                                >
                                    <h4>Sign Out</h4>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="wrapper">
                    <button
                        className="btn sort-btn btn-lg"
                        id="listNew"
                        href="/connections/chrono"
                    >
                        Hot Stocks
                    </button>
                </div>

                <div className="container-fluid stocks-container">
                    <div>{this.renderHotStocks()}</div>


                    
                </div>

                <footer className="footer">
                    <div className="container">
                        <p>Stocks Scraper</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Stocks;
