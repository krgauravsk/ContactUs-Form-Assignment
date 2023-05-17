import React from "react";
import "./styles.css";

function Card() {
  return (
    <div className="card-container">
      <div className="title">Contact Us</div>
      <div>
        <div className="subtitle">Inspections</div>
        <span className="text-no">(800)309-6753 | info@wini.com</span>
      </div>
      <div>
        <div className="subtitle">Franchising</div>
        <span className="text-no">(800)309-6753 | info@wini.com</span>
      </div>
      <div>
        <div className="subtitle">Vendors</div>
        <span className="text-no">(800)309-6753 | info@wini.com</span>
      </div>
    </div>
  );
}
export default Card;
