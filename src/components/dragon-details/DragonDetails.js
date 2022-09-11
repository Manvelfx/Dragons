import React, { Component } from "react"
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import {withLocation} from "../../hoc/withLocation";
import {withRouter} from "../../hoc/withRouter";
import "./DragonDetails.css";

class DragonDetails extends Component {
  render() {
    const {dragonData} = this.props.location.state

    return (
      <div className="dragon-details">
        <div className="dragon-details-img-carousel">
          <Carousel showArrows={true} showThumbs={false} autoPlay>
            {dragonData.flickr_images.map((imageSrc, index) =>
              <div key={index}>
                <img src={imageSrc} alt="" width={250} height={250} />
              </div>
            )}
          </Carousel>
        </div>
        <div className="dragon-details-property-content">
          <div className="dragon-details-property">
            <span className="dragon-details-property-name">Name</span>
            <span className="dragon-details-property-value">{dragonData.name}</span>
          </div>
          <div className="dragon-details-property">
            <span className="dragon-details-property-name">Description</span>
            <span className="dragon-details-property-value">{dragonData.description}</span>
          </div>
          <div className="dragon-details-property">
            <span className="dragon-details-property-name">Wikipedia</span>
            <a
              className="dragon-details-property-value _one-line"
              href={dragonData.wikipedia}
              target="_blank"
              rel="noreferrer"
            >
              Wiki link
            </a>
          </div>
          <div className="dragon-details-property">
            <span className="dragon-details-property-name">Height</span>
            <span className="dragon-details-property-value">
              {dragonData.height_w_trunk.meters} meters
            </span>
          </div>
          <div className="dragon-details-property">
            <span className="dragon-details-property-name">Dry Mass</span>
            <span className="dragon-details-property-value">
              {dragonData.dry_mass_kg} kg
            </span>
          </div>
          <div className="dragon-details-property">
            <span className="dragon-details-property-name">First Flight</span>
            <span className="dragon-details-property-value">
              {dragonData.first_flight}
            </span>
          </div>
          <div className="dragon-see-more">
            <button className="dragon-details__go-back-button" onClick={() => {
              this.props.navigate("/")
            }}>Go Back</button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(withLocation(DragonDetails));

DragonDetails.propTypes = {
  dragonData: PropTypes.object
}