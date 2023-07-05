"use client";

import React from "react";
import Image from "next/image";
import "./LadoIz.css";
import Encabezado from "../Encabezado";

export default function LadoIz(props) {
  return (
    <section className="todayWeather__section">
      <Encabezado />
      <div className="currentWeather__info_container">
        <div className="weather__icon_container">
          <span className="currentWeather_icon">
            <Image src={`/clima/${props.icon}`} width={80} height={80} alt={props.condition} />
          </span>
        </div>

        <div className="weather__temp_container">
          <h2 className="weather__temp">{props.temp}</h2>

          <h3>{props.changeTemp}</h3>
        </div>

        <h2 className="weather__condition">{props.condition}</h2>

        <p className="weather__date">
          Today &nbsp;&nbsp; . &nbsp;&nbsp; {props.date}
        </p>

        <pre className="weather__location">
          <span className="material-symbols-outlined">location_on</span>
          {props.city}
        </pre>
      </div>
    </section>
  );
}
