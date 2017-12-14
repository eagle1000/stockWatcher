import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import News from "./components/news.js"
import Login from "./components/login.js"
import profCreate from "./components/profile_create.js"
import WishList from "./components/wishList.js"
import Stocks from "./components/stocks.js"
import Dashboard from "./components/dashboard.js"
import logo from './logo.svg';
import "./css/stocksstyle.css";
import "./css/loginstyle.css";
import './App.css';




const App = () => 
 <Router>
    <Switch>
      <Route exact path= "/" component = {Login} />
      <Route exact path= "/login" component = {Login} />
      <Route exact path= "/News" component = {News}/>
      <Route exact path= "/profCreate" component = {profCreate}/>
      <Route exact path= "/WishList" component = {WishList}/>
      <Route exact path= "/Stocks" component = {Stocks}/>
      <Route exact path= "/Stocks/:id" component = {Dashboard}/>
      <Route exact path= "/signin" component = {Stocks}/>
    </Switch>

 </Router>


export default App;
