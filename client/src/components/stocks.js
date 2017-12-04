import React, {Component} from "react"
import {Link} from "react-router";
<<<<<<< HEAD
// import "../css/stocksstyle.css";
import helpers from "../utils/helpers";


21a15eadfb59ff0bfe78d0cf992cd12557fcdd6e

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
<<<<<<< HEAD
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
  
   
  <a className="navbar-brand" href="./logo.png">StockWatch</a>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#"> Stocks <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">News</a>
      </li>
       <li className="nav-item">
        <a className="nav-link" href="#">Wish List</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Sign Out</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search"></input>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
{/*<nav class="navbar navbar-toggleable-md navbar-light bg-faded">
=======
<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
>>>>>>> 21a15eadfb59ff0bfe78d0cf992cd12557fcdd6e
    <span>
    <button className="navbar-toggler navbar-toggler-left" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span>
            <i className="fa fa-bars fa-bars-connection fa-lg" aria-hidden="true"></i>
        </span>
    </button>
    


<<<<<<< HEAD
   
=======
    <button className="button-clear">
        <a href="/share"> 
            <i className="fa fa-plus fa-plus-connection fa-lg" aria-hidden="true"></i>
        </a>
    </button> 
>>>>>>> 21a15eadfb59ff0bfe78d0cf992cd12557fcdd6e
</span>

    <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a className="nav-link" href="/stocks"><h4>Stocks</h4></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/news"><h4>News</h4></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/wishlist"><h4>WishList</h4></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/login" id="sign-out-button"><h4>Sign Out</h4></a>
            </li>
        </ul>
    </div>
</nav>*/
}

<div className="wrapper">
  
<<<<<<< HEAD
        <button className="btn sort-btn btn-lg" id="listHot" href="/connections/chrono">Hot</button>
        <button className="btn sort-btn btn-lg" id="listRising" href="/connections/alpha">Rising</button>
        <button className="btn sort-btn btn-lg" id="listFollowing" href="/connections/alpha">Following</button>
=======
        <button className="btn sort-btn btn-lg" id="listNew" href="/connections/chrono">r/StockMarket</button>
        <button className="btn sort-btn btn-lg" id="listAlpha" href="/connections/alpha">r/Investing</button>
        <button className="btn sort-btn btn-lg" id="listAlpha" href="/connections/alpha">r/Investing</button>
>>>>>>> 21a15eadfb59ff0bfe78d0cf992cd12557fcdd6e
    </div>

<div className="container-fluid stocks-container">
</div>

        <footer className="footer">
          <div className="container">
            <p>Stocks Scraper</p>
            // <h1>{this.state.close}</h1>
            
            <h2>{this.state.hotStocks}</h2>
           
          </div>
        </footer>
 </div>
                    

            )
    }
}

export default Stocks