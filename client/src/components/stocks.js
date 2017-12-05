import React, { Component } from "react";
import { Link } from "react-router";
// Include the helpers for making API calls
import helpers from "../utils/helpers";
import Chart from "./Chart.js";

class Stocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotStocks: [],
            userStocks: [],
            chartData: {}
        };
        this.savedStocks = this.savedStocks.bind(this);
        this.userSavedStocks = this.userSavedStocks.bind(this);
        this.getChartData = this.getChartData.bind(this);
    }

    getChartData() {
        helpers.getTopStockChartData().then(data => {
            this.setState({
                chartData: data});
        });
    }

    renderChartData(){
        return this.state.hotStocks.map(function(item) {
            return <Chart key={item}/>;
        }) 
    }

    renderHotStocks() {
        return this.state.hotStocks.map(function(item) {
            return <p key={item}>{item}</p>;
        })
    }

      renderUserStocks() {
        return this.state.userStocks.map(function(item) {
            return <p key={item}>{item}</p>;
        })
    }

    savedStocks() {
        console.log('we hit savedStocks function starting --');
        helpers.getSavedStocks().then(stocks => {
            // console.log('these are the saved stocks',stocks)
            this.setState({ hotStocks: stocks });
        })
     }
      
    userSavedStocks() {
        // console.log('we hit savedStocks function starting --');
        helpers.getUserStocks().then(mystocks => {
            // console.log('these are the saved stocks',stocks)
            this.setState({ userStocks: mystocks });
        })
    }
     

    componentWillMount() {
        this.savedStocks();
        this.userSavedStocks();
        this.getChartData();
    }

    render() {
        return (
            <div>
<<<<<<< HEAD
    

        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">

                
                <div className="collapse navbar-collapse" id="navbarContent">
                <img src= "http://embswarsaw.com/wp-content/uploads/2017/06/logo_StockWatch2.png" className="navLogo"/>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/stocks"><h4>Stocks</h4></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/news"><h4>News</h4></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/" id="sign-out-button"><h4>Sign Out</h4></a>
                        </li>
                    </ul>
=======
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
>>>>>>> 2da5dffc2234446a18d624ca48a3ce6f2b18bd6f
                </div>

                <div className="container-fluid stocks-container">
                    <div>{this.renderHotStocks()}</div>
                    <div>{this.renderChartData()}</div>
                    

                    <div>{this.renderUserStocks()}</div>
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
