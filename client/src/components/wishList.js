import React, {Component} from "react"
import {Link} from "react-router";


class WishList extends Component {

    render() {
        return (
            <div>

<nav className="navbar navbar-toggleable-md navbar-light bg-faded">

    <span>
    <button className="navbar-toggler navbar-toggler-left" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span>
            <i className="fa fa-bars fa-bars-connection fa-lg" aria-hidden="true"></i>
        </span>
    </button>
    


    <button className="button-clear">
        <a href="/share"> 
            <i className="fa fa-plus fa-plus-connection fa-lg" aria-hidden="true"></i>
        </a>
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
                <a className="nav-link" href="/signout" id="sign-out-button"><h4>Sign Out</h4></a>
            </li>
        </ul>
    </div>
</nav>*/

<div className="container-fluid WishList-container">
</div>

<footer className="footer">
  <div className="container">
    <p>Wish List</p>
  </div>
</footer>
</div>
                    

            )
    }
}

export default WishList
