import LadoIz from "@/components/LadoIz";
import LadoD from "@/components/LadoD";
import React, { use } from "react";
/*import { useState } from "react";*/

function formatoDeFecha() {
  let hoy = new Date();

  let diaSemana = hoy.toLocaleString("en-US", { weekday: "short" });

  let diaMes = hoy.getDate();

  let mes = hoy.toLocaleString("en-US", { month: "short" });

  return `${diaSemana}, ${diaMes} ${mes}`;
}

const getClima = async () => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=4ad565930b09016071d3b0ba0747ae13&units=metric`
  );

  const jsonResponse = await response.json();

  return jsonResponse;
};

const promClima = getClima();

export default function Home() {
  /*const [temForm, seTemForm] = useState("metric");
  const centigrados = () => seTemForm("metric");
  const farengein = () => seTemForm("imperial");*/
  const clima = use(promClima);
  const fecha = formatoDeFecha();

  return (
    <div className="container">
      <LadoIz
        icon={parseInt(clima.weather[0].icon) + ".png"}
        temp={Math.round(clima.main.temp) }
        city={clima.name}
        condition={clima.weather[0].description}
        date={fecha}
      />
      <LadoD />
    </div>
  );
}
