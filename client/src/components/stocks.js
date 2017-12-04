import React, {Component} from "react"
import {Link} from "react-router";
// import "../css/stocksstyle.css";

class Stocks extends Component {

    render() {
        return (
            <div>
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
    <span>
    <button className="navbar-toggler navbar-toggler-left" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span>
            <i className="fa fa-bars fa-bars-connection fa-lg" aria-hidden="true"></i>
        </span>
    </button>
    


   
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
  
        <button className="btn sort-btn btn-lg" id="listHot" href="/connections/chrono">Hot</button>
        <button className="btn sort-btn btn-lg" id="listRising" href="/connections/alpha">Rising</button>
        <button className="btn sort-btn btn-lg" id="listFollowing" href="/connections/alpha">Following</button>
    </div>

<div className="container-fluid stocks-container">
</div>

        <footer className="footer">
          <div className="container">
            <p>Stocks Scraper</p>
          </div>
        </footer>
 </div>
                    

            )
    }
}

export default Stocks