"use client";
import React, { use } from "react";
import "./LadoD.css";
import BotonesGrados from "../BotonesGrados";
import PronosticoT from "../PronosticoT";
import Cards from "../Cards";
import Footer from "../Footer";
import Otros from "../Otros";

const getData = async () => {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/forecast?lat=44.34&units=metric&lon=10.99&appid=4ad565930b09016071d3b0ba0747ae13"
  );

  const jsonResponse = await response.json();

  const today = new Date();
  let date;
  const weather = [];

  for (let i = 0; i < jsonResponse.list.length; i += 1) {
    date = new Date(jsonResponse.list[i].dt_txt);

    if (date.getDate() !== today.getDate()) {
      weather.push(jsonResponse.list[i]);

      i = i + 8;
    }
  }

  return weather;
};

const promPronostico = getData();

export default function LadoD({}) {
  const pronostico = use(promPronostico);
  console.log(pronostico);
  return (
    <div className="rightSide">
      <BotonesGrados />
      <PronosticoT>
        {pronostico.map((pron, i) => (
          <Cards
            key={i}
            temp_min={Math.round(pron.main.temp_min) + "C"}
            temp_max={Math.round(pron.main.temp_max) + "C"}
          />
        ))}
      </PronosticoT>
      <Otros 
      pronostico={pronostico}
      />
      <Footer />
    </div>
  );
}
