import React, {Component} from "react"
import {Link} from "react-router";

class Login extends Component {
	
	render() {
		return(
<div>
		<div>
			<h1> <img src = "http://embswarsaw.com/wp-content/uploads/2017/06/logo_StockWatch2.png"></img> </h1>

		</div>

	<div class="container">
 
		<form action="/signin" method="POST" class="form-signin">
			<label for="inputEmail" class="sr-only">Email Address</label>
			<input type="email" name="email" id="inputEmail" class="form-control form-box-style" placeholder="Email" required autofocus></input>
			<label for="inputPassword" class="sr-only">Password</label>
			<input type="password" name="user_password" id="inputPassword" class="form-control form-box-style" placeholder="Password" required></input>
			<button class="btn sign-in-btn btn-lg btn-block" type="submit" id="sign-in">Sign In</button>
			<button action="/signup" method="GET" class="btn sign-in-btn btn-lg btn-block" id="create"> <a href="/signup" id="signup">Create Account</a></button>
		</form>
		
	</div>

</div>

		)
	}
}

export default Login