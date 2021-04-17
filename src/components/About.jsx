import React from "react";
import Aboutimage from "../images/organic-about-1.png";

function About() {
  return (
    <div className="about">
      <div className="about-img">
        <img src={Aboutimage} />
      </div>
      <div className="about-text">
        <h3>
          Fresh Food, Simply <font>Delicious</font>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          distinctio odit, cumque repellat optio amet hic porro dolorum commodi!
          Voluptatibus perspiciatis, ullam blanditiis et nihil labore culpa
          mollitia nesciunt laudantium.
        </p>
        <a href="#" className="m-btn">
          Read More
        </a>
      </div>
    </div>
  );
}

export default About;
