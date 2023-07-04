import React from "react";
import "./Cards.css";
import Image from "next/image";
export default function Cards(props) {
  return (
    <li className="nextDaysWeather__items">
      <h3 className="nextDaysWeather__date">{props.date}</h3>

      <span className="nextDaysWeather__icon">
        <Image src={props.icon} alt={props.condition} />
      </span>

      <div className="nextDaysWeather__temp_container">
        <p className="nextDaysWeather__temp_a">
          {props.temp_max}
          {props.unit}
        </p>

        <p className="nextDaysWeather__temp_b">
          {props.temp_min}
          {props.unit}
        </p>
      </div>
    </li>
  );
}
