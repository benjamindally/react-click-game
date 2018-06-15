import React from "react";

import "./images.css";

class Images extends React.Component {
  getID = () => {
    let id = this.props.id;
    let used = this.props.used;
    this.props.game(id, used);
  };
  render() {
    return (
      <div className="image">
        <div className="image_top">
          <img
            className="xmen_image"
            alt={this.props.name}
            src={this.props.image}
            onClick={this.getID}
            id={this.props.id}
            used={this.props.used}
          />
        </div>
      </div>
    );
  }
}

export default Images;
