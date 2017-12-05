import React, {Component} from "react"
import {Link} from "react-router";
// import "../css/loginstyle.css"


class Login extends Component {
	
	render() {
		return(
<div>
		<div>
			 <img src = "http://embswarsaw.com/wp-content/uploads/2017/06/logo_StockWatch2.png" id ="logo"></img>

		</div>

	<div className="container">
 

		<form action="/signin" method="POST" className="form-signin">
			<label for="inputEmail" className="sr-only">Email Address</label>
			<input type="email" name="email" id="inputEmail" className="form-control form-box-style" placeholder="Email" required autofocus></input>
			<label for="inputPassword" className="sr-only">Password</label>
			<input type="password" name="user_password" id="inputPassword" className="form-control form-box-style" placeholder="Password" required></input>
			<button className="btn sign-in-btn btn-lg btn-block" type="submit" id="sign-in"><a href="/Stocks" id="signin">Sign In</a></button>

			<button action="/profCreate" method="GET" className="btn sign-in-btn btn-lg btn-block" id="create"> <a href="/profCreate" id="signup">Create Account</a></button>

		</form>
		
	</div>

</div>

		)
	}
}

export default Login
