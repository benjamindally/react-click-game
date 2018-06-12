import React from "react";
import images from "./images.json";
import "./images.css";

const Images = props => (
  <div className="image">
    <div className="image_top">
      <img
        className="xmen_image"
        alt={props.name}
        src={props.image}
        onClick={props.game}
        id={props.id}
      />
    </div>
  </div>
);

export default Images;
