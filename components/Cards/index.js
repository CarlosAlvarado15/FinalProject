import React from "react";
import "./Cards.css";
import Image from "next/image";
export default function Cards(props) {
  let climaImg = "";
  switch (datos.list[0].weather[0].main) {
    case `Clear`:
      climaImg = `./Clear.png`;
      console.log(`Limpio`);
      break;
    case `Clouds`:
      climaImg = `./HeavyCloud.png`;
      console.log(`Nubes`);
      break;
    case `Thunderstorm`:
      climaImg = `./Thunderstorm.png`;
      console.log(`Tormenta`);
      break;
    case `Drizzle`:
      climaImg = `./LightRain.png`;
      console.log(`Llovizna`);
      break;
    case `Rain`:
      climaImg = `./HeavyRain.png`;
      console.log(`Lluvia`);
      break;
    case `Snow`:
      climaImg = `./Snow.png`;
      console.log(`Nieve`);
      break;
    case `Atmosphere`:
      climaImg = `./Shower.png`;
      console.log(`Atmosfera`);
      break;
  }
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
