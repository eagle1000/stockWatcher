import React, {Component} from "react"
import {Link} from "react-router";

class Login extends Component {
	
	render() {
		return(
<div>
		<div>
			<h1> <img src = "http://embswarsaw.com/wp-content/uploads/2017/06/logo_StockWatch2.png"></img> </h1>

		</div>

	<div className="container">
 
		<form action="/signin" method="POST" className="form-signin">
			<label for="inputEmail" className="sr-only">Email Address</label>
			<input type="email" name="email" id="inputEmail" className="form-control form-box-style" placeholder="Email" required autofocus></input>
			<label for="inputPassword" className="sr-only">Password</label>
			<input type="password" name="user_password" id="inputPassword" className="form-control form-box-style" placeholder="Password" required></input>
			<button className="btn sign-in-btn btn-lg btn-block" type="submit" id="sign-in">Sign In</button>
			<button action="/signup" method="GET" className="btn sign-in-btn btn-lg btn-block" id="create"> <a href="/signup" id="signup">Create Account</a></button>
		</form>
		
	</div>

</div>

		)
	}
}

export default Login
