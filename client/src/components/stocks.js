import React, {Component} from "react"
import {Link} from "react-router";
// Include the helpers for making API calls
import helpers from "../utils/helpers";



class Stocks extends Component {
 constructor(props) {
    super(props);
    this.state =  {
        close: '',
        ticker: ''
    }
    this.setQuery = this.setQuery.bind(this);
  }  

savedStocks() {
    console.log('we hit savedStocks function starting --');
    helpers.getSavedStocks().then((stocks) => {
      console.log('these are the saved stocks',stocks.data)
      this.setState({ticker: stocks.data});
    });
  }

 setQuery() {
    console.log('we hit setQuest function starting --');
    helpers.realTimeQuotes().then((data) => {
      console.log('this is stock price IN THE COMPONENT ready to gooo ---',data)
      this.setState({close: data});
    });
  }


  componentWillMount() {
    this.setQuery()
    this.savedStocks()
  }

    render() {


    console.log('this is the state of our stock component ------', this.state);
        return (
            <div>
<nav class="navbar navbar-toggleable-md navbar-light bg-faded">
    <span>
    <button class="navbar-toggler navbar-toggler-left" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span>
            <i class="fa fa-bars fa-bars-connection fa-lg" aria-hidden="true"></i>
        </span>
    </button>
    


    <button class="button-clear">
        <a href="/share"> 
            <i class="fa fa-plus fa-plus-connection fa-lg" aria-hidden="true"></i>
        </a>
    </button> 
</span>

    <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="/stocks"><h4>Stocks</h4></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/news"><h4>News</h4></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/wishlist"><h4>WishList</h4></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/login" id="sign-out-button"><h4>Sign Out</h4></a>
            </li>
        </ul>
    </div>
</nav>


<div class="wrapper">
  
        <button class="btn sort-btn btn-lg" id="listNew" href="/connections/chrono">r/StockMarket</button>
        <button class="btn sort-btn btn-lg" id="listAlpha" href="/connections/alpha">r/Investing</button>
        <button class="btn sort-btn btn-lg" id="listAlpha" href="/connections/alpha">r/Investing</button>
    </div>

<div class="container-fluid stocks-container">
</div>

        <footer class="footer">
          <div class="container">
            <p>Stocks Scraper</p>
            <h1>{this.state.close}</h1>
            {
                this.state.ticker &&
                this.state.ticker.map( tickerObj => 
                    <h3>{tickerObj.ticker}</h3>
                )
            }
          </div>
        </footer>
 </div>
                    

            )
    }
}

export default Stocks