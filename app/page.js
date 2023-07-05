
import LadoIz from "@/components/LadoIz";
import LadoD from "@/components/LadoD";
import React, { use } from "react";

function formatoDeFecha() {

  let hoy = new Date();

  let diaSemana = hoy.toLocaleString('en-US', { weekday: 'short' });

  let diaMes = hoy.getDate();

  let mes = hoy.toLocaleString('en-US', { month: 'short' });

  return `${diaSemana}, ${diaMes} ${mes}`;
}

const getClima = async () => {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=4ad565930b09016071d3b0ba0747ae13"
  );

  const jsonResponse = await response.json();

  return jsonResponse;
};


const promClima = getClima();

export default function Home() {

  const clima = use(promClima);
  const fecha = formatoDeFecha()

  return (
    <div className="container">
      <LadoIz 
          icon = {parseInt(clima.weather[0].icon)+".png"}
          temp = {clima.main.temp }
          city = {clima.name}
          condition = {clima.weather[0].description}

          date = {fecha}

      />
      <LadoD />
    </div>
  );
}
// no se por que la palabra use no se esta funcioando que version de node tienes? dame chace
