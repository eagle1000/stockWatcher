import React, { Component } from "react";
import { Link } from "react-router";
// Include the helpers for making API calls
import helpers from "../utils/helpers";
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userStocks: [],
            stocks: ""
        };
        this.userSavedStocks = this.userSavedStocks.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

    }

    renderUserStocks() {
        return this.state.userStocks.map(function(item) {
            return <div>
            <button className="btn btn-primary delete-btn" onClick={() => helpers.handleClick(item)}>Delete</button>
                    <p className="user-stocks" key={item}>{item}</p>;
                    </div>
        });
    }

    userSavedStocks() {
        // console.log('we hit savedStocks function starting --');
        helpers.getUserStocks(this.props.match.params.id).then(mystocks => {
            // console.log('these are the saved stocks',stocks)
            this.setState({ userStocks: mystocks });
        });
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit(event) {
        // event.preventDefault();
        console.log("handleFormSubmit", this.state.stocks);
        helpers.saveUserStocks(this.props.match.params.id, this.state.stocks)
        // return state of stocks to empty to clear entry form field
        .then( () => {
            this.setState({stocks:""})
        });
    }

    componentWillMount() {
        this.userSavedStocks();
    }

    componentDidUpdate() {
        this.userSavedStocks();
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
                    <a href="/stocks">
                        <button className="btn sort-btn btn-lg" id="listNew">
                            Hot Stocks
                        </button>
                    </a>

                    <div class="col-lg-6">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter a ticker symbol"
                                value={this.state.stocks}
                                onChange={this.handleInputChange}
                                name="stocks"
                            />
                            <span className="input-group-btn">
                                <button
                                    className="btn btn-secondary"
                                    type="button"
                                    onClick={this.handleFormSubmit}
                                >
                                    Go!
                                </button>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="container-fluid stocks-container">
                    
                    
                    <div>{this.renderUserStocks()}</div>
                    
                </div>

                <footer className="footer">
                    <div className="container" />
                </footer>
            </div>
        );
    }
}

export default Dashboard;
