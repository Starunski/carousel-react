import React from "react";
import green_elem from "assets/green_elem.png";
import "./Card.scss";

export default function Card({ data }) {
  return (
    <div className="card">
      <div className="card-head">
        <p>{data.title}</p>
        <div className="card-logo">
          <img src={require(`../../assets/${data.icon}`)} alt={data.icon} />
        </div>
      </div>
      <div className="card-body">
        <div className="our-benefits-wrapper">
          <span className="title">US</span>
          <div className="benefits-list">
            <ul>
              {data.ourBenefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <hr />

        <div className="their-benefits-wrapper">
          <span className="title">THEM</span>
          <div className="their-benefits-list">
            <ul>
              {data.theirBenefits.map((item, index) => (
                <li key={index}>{item} </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="card-foot">
        <img src={green_elem} alt={green_elem} />
      </div>
    </div>
  );
}
