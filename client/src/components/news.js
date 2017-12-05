import React, {Component} from "react"
import {Link} from "react-router";
import helpers from "../utils/helpers.js"

class News extends Component {
    state = {
        articles: []
    }
    componentDidMount(){
        console.log("we are here in compmount")
        let app = this
        helpers.getEveryUNeed().then(function(articles){
            console.log(articles, "yeaaaaaa ******")
            app.setState({articles: articles.data})
        })
    
    }


    renderArticles(){
        return this.state.articles.map(function(article, index){
            return <p key= {index}>{article.headline, article.summary}</p>
            
        })
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


            <div className="wrapper">

              
                    <button className="btn sort-btn btn-lg" id="listStockMarket" href="/connections/chrono">r/StockMarket</button>
                    <button className="btn sort-btn btn-lg" id="listInvesting" href="/connections/alpha">r/Investing</button>
                
            </div>

            <div className="container-fluid article-container">
                {this.renderArticles()}
            </div>

            <footer className="footer">
              <div className="container">
                <p>Reddit Scraper</p>
              </div>
            </footer>
            </div>
        </div>

            )
    }
}

export default News