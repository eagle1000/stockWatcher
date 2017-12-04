import React, {Component} from "react"
import {Link} from "react-router";
// Include the helpers for making API calls
import helpers from "../utils/helpers";
import Chart from "./Chart.js"


class Stocks extends Component {
 constructor(props) {
    super(props);
    this.state =  {
        // close: '',
        hotStocks: []
    }
    // this.setQuery = this.setQuery.bind(this);
    this.savedStocks = this.savedStocks.bind(this);
  }  

savedStocks() {
    // console.log('we hit savedStocks function starting --');
    helpers.getSavedStocks().then((stocks) => {
      // console.log('these are the saved stocks',stocks)
      this.setState({hotStocks: stocks});
    });
  }

 // setQuery() {
 //    // console.log('we hit setQuest function starting --');
 //    helpers.realTimeQuotes().then((data) => {
 //      // console.log('this is stock price IN THE COMPONENT ready to gooo ---',data)
 //      this.setState({close: data});
 //    });
 //  }


  componentWillMount() {
    // this.setQuery()
    this.savedStocks()
  }

    render() {


    
        return (
            <div>
    

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
                            <a className="nav-link" href="/login" id="sign-out-button"><h4>Sign Out</h4></a>
                        </li>
                    </ul>
                </div>
            </nav>


<div className="wrapper">
  
        <button className="btn sort-btn btn-lg" id="listNew" href="/connections/chrono">Hot Stocks</button>
    </div>

<div className="container-fluid stocks-container">
    <h2>{this.state.hotStocks}</h2>
    <Chart />
</div>

        <footer className="footer">
          <div className="container">
            <p>Stocks Scraper</p>
            // <h1>{this.state.close}</h1>
            
            
           
          </div>
        </footer>
 </div>
                    

            )
    }
}

export default Stocks