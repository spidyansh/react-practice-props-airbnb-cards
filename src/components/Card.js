import React from "react";

export default function Card(props) {
  return (
    <div >
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.content}
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">⭐{props.rating}</li>
          <li className="list-group-item">{props.price}</li>
        </ul>
        <div className="card-body">
          <a href={props.link} className="card-link">
            Visit
          </a>
        </div>
      </div>
    </div>
  );
}
