import React from "react";
import "./main.css";

function Main(props) {
  return (
    <div className="main">
      <div className="card">
        <img className="card-img" src={props.itens.imageUrl} alt="Landscape" />
        <div className="card-info">
          <div className="card-info-location">
            <img
              className="card-info-location-icon"
              src="src\assets\ping.svg"
              alt="Ping icon"
            />
            <p className="card-info-location-country">{props.itens.location}</p>
            <a
              className="card-info-location-map"
              href={props.itens.googleMapsUrl}
            >
              View on Google Maps
            </a>
          </div>
          <h1 className="card-info-tittle">{props.itens.title}</h1>
          <p className="card-info-date">
            {props.itens.startDate} - {props.itens.endDate}
          </p>
          <p className="card-info-description">{props.itens.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
