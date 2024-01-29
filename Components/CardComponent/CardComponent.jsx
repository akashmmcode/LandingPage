import React from "react";
import "./CardComponent.css";

const CardComponent = () => {
  return (
    <div className="card_container">
      <img
        className="image"
        src="https://images.pexels.com/photos/15861750/pexels-photo-15861750/free-photo-of-sky-sunset-airplane-flight-background-wallpaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="image"
      ></img>
      <div className="content">
        <div className="row1">
          <p>5mins read</p>
          <span>TECH</span>
        </div>
        <div className="title">
          <h2>The Modern Architects Toolkit</h2>
          <p>
            We use ads to keep our content free for you ontent free for you.
            Please allow ads and let sponsors fund your surfing. Thank you! We
            use ads to keep our content free for you ontent free for you.
          </p>
        </div>
        <div title="author">
          <span> </span>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
