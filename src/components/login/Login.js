import "./Login.css";
import React, { Component } from "react";
import { Navigate } from "react-router";
import {Link} from "react-router-dom";
import {withRouter} from "../../hoc/withRouter";
import { AuthContext } from "../../context/Auth";
import app from "../../base.js";

class Login extends Component {
  static contextType = AuthContext;

  handleLogin =
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        const signIn = await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        console.log("🚀 ~ Login ~ signIn", signIn)
        this.props.navigate("/");
      } catch (error) {
        alert(error);
      }
    }

  render() {
    const currentUser = this.context?.currentUser;

    if (currentUser) {
      return <Navigate to="/" />;
    }
  
    return (
      <div className="login">
        <h1>Log in</h1>
        <form onSubmit={this.handleLogin}>
          <input name="email" type="email" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button type="submit">Log in</button>
        </form>
        <h4>Don't have an account?</h4>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }
};

export default withRouter(Login);