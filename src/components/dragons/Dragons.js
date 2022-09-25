import "./Dragons.css"
import React, { Component } from 'react';
import Dragon from "../dragon/Dragon";
import { AuthContext } from "../../context/Auth";
import app from "../../base";
export default class Dragons extends Component {
  static contextType = AuthContext;
  
  state = {
    dragonlist: []
  }
  
  componentDidMount() {
    fetch("https://api.spacexdata.com/v4/dragons")
      .then(data => {
        return data.json()
      })
      .then(dragons => {
        this.setState({dragonlist: dragons})
      })
  }

  render() {
    return (
      <div className="dragons">
        <h2>Hi, {this.context?.currentUser.email}</h2>
        <button onClick={() => app.auth().signOut()}>Sign Out</button>
        <h2>Dragons list</h2>
        <div className="dragons-list">
          {
            this.state.dragonlist.map(dragonData =>
              <Dragon dragonData={dragonData} key={dragonData.id} />
            )
          }
        </div>
      </div>
    )
  }
}
