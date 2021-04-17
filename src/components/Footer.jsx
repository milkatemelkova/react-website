import React from "react";

function Footer() {
  return (
    <div className="subscribe-container">
      <h3>Subscribe For React</h3>
      <div className="subscribe-input">
        <input type="email" placeholder="example@google.com" />
        <a href="#" className="subscribe-btn">
          Send
        </a>
      </div>
    </div>
  );
}

export default Footer;
