import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import News from "./components/news.js"
import Login from "./components/login.js"
import profCreate from "./components/profile_create.js"
import WishList from "./components/wishList.js"
import Stocks from "./components/stocks.js"
import logo from './logo.svg';
import "./css/stocksstyle.css";
import "./css/loginstyle.css";
import './App.css';




const App = () => 
 <Router>
    <Switch>
      <Route exact path= "/" component = {Login} />
      <Route exact path= "/News" component = {News}/>
      <Route exact path= "/profCreate" component = {profCreate}/>
      <Route exact path= "/WishList" component = {WishList}/>
      <Route exact path= "/Stocks" component = {Stocks}/>
    </Switch>

 </Router>


export default App;
