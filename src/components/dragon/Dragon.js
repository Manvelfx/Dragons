import "./Dragon.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import {withRouter} from "../../hoc/withRouter";

class Dragon extends Component {

  render() {
    const {dragonData} = this.props
    console.log("🚀 ~ Dragon ~ render ~ dragonData", dragonData)
    console.log("🚀 ~ Dragon ~ render ~ this.props", this.props)

    return (
      <div className="dragon">
        <div className="dragon-img">
          <img src={dragonData.flickr_images[0]} alt="Dragon" width={250} height={250} />
        </div>
        <div className="dragon-property">
          <span className="dragon-property-name">Name</span>
          <span className="dragon-property-value">{dragonData.name}</span>
        </div>
        <div className="dragon-property">
          <span className="dragon-property-name">Description</span>
          <span className="dragon-property-value">{dragonData.description}</span>
        </div>
        <div className="dragon-property">
          <span className="dragon-property-name">Wikipedia</span>
          <a
            className="dragon-property-value _one-line"
            href={dragonData.wikipedia}
            target="_blank"
            rel="noreferrer"
          >
            Wiki link
          </a>
        </div>
        <div className="dragon-property">
          <span className="dragon-property-name">Height</span>
          <span className="dragon-property-value">
            {dragonData.height_w_trunk.meters} meters
          </span>
        </div>
        <div className="dragon-property">
          <span className="dragon-property-name">Dry Mass</span>
          <span className="dragon-property-value">
            {dragonData.dry_mass_kg} kg
          </span>
        </div>
        <div className="dragon-property">
          <span className="dragon-property-name">First Flight</span>
          <span className="dragon-property-value">
            {dragonData.first_flight}
          </span>
        </div>
        <div className="dragon-see-more">
          <button className="dragon-see-more__button" onClick={() => {
            this.props.navigate("details/" + dragonData.id, {state: {dragonData}})
          }}>See More Info</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Dragon);

Dragon.propTypes = {
  dragonData: PropTypes.object
}
