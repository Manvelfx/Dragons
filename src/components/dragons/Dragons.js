import "./Dragons.css"
import React, { Component } from 'react';
import Dragon from "../dragon/Dragon";

export default class Dragons extends Component {
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
