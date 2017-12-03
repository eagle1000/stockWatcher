import React, {Component} from "react"
import {Link} from "react-router";

class profCreate extends Component {
  render(){
    return(

<div>
<div>
    <h1> StockWatcher </h1>
</div>

<div className="container">
    <form action="/signup" method="POST" class="scroll">

        <div className="form-group">
          <label for="inputName1">First Name</label>
          <input type="text" className="form-control form-box-style" id="inputName1" placeholder="Enter First Name" name="first_name"></input>
        </div>

        <div className="form-group">
          <label for="inputName2">Last Name</label>
          <input type="text" className="form-control form-box-style" id="inputName2" placeholder="Enter Last Name" name="last_name"></input>
        </div>

        <div className="form-group">
          <label for="inputEmail">Email</label>
          <input type="email" className="form-control form-box-style" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" name="email"></input>
        </div>
          
        <div className="form-group">
          <label for="inputPassword">Password</label>
          <input type="password" className="form-control form-box-style" id="inputPassword" placeholder="Enter Password" name="user_password"></input>
        </div>


        <button type="submit" className="btn sign-in-btn btn-lg btn-block" id="create-new-account">
            <a>Submit</a>
        </button>

    </form>
</div>
</div>

    )
  }
}

export default profCreate