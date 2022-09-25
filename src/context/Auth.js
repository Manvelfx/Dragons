import React, { Component } from "react";
import app from "../base.js";

export const AuthContext = React.createContext();

export default class AuthProvider extends Component {
  state = {
    currentUser: null,
    pending: true
  };

  componentDidMount() {
    console.log("Here....")
    app.auth().onAuthStateChanged((user) => {
      console.log("🚀 ~ AuthProvider ~ app.auth ~ user", user)
      this.setState({
        currentUser: user,
        pending: false
      })
    });
  }

  render() {
    if(this.state.pending){
      return <>Loading...</>
    }

    return (
      <AuthContext.Provider
        value={{
          currentUser: this.state.currentUser
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
};