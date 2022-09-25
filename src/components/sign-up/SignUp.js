import "./SignUp.css"
import React, { Component } from "react";
import {Link} from "react-router-dom";
import {withRouter} from "../../hoc/withRouter";
import app from "../../base";

class SignUp extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      this.props.navigate("/");
    } catch (error) {
      alert(error);
    }
  }

  render() {
    return (
      <div className="sign-up">
        <h1>Sign up</h1>
        <form onSubmit={this.handleSignUp}>
          <input name="email" type="email" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
        <h4>Already have an account?</h4>
        <Link to="/login">Login</Link>
      </div>
    );
  }
};

export default withRouter(SignUp);