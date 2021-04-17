import React from "react";
import Nav from "./Nav/Nav";
import image from "../images/organic-pattern-1.png";

function Header() {
  return (
    <div className="main">
      <Nav />
      <div className="m-text">
        <img src={image} />
        <h2>
          Eat <font>Clean</font>and <font>.Eat Organic</font>
        </h2>
        <a
          href="
        #"
          className="m-btn"
        >
          Products
        </a>
      </div>
    </div>
  );
}

export default Header;
