import React from "react";
import "./Encabezado.css";
const location = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-geo-alt-fill"
    viewBox="0 0 16 16"
  >
    {" "}
    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />{" "}
  </svg>
);

const iconTarg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="30"
    width="30"
    fill="white"
    viewBox="0 -960 960 960"
  >
    {" "}
    <path d="M450-42v-75q-137-14-228-105T117-450H42v-60h75q14-137 105-228t228-105v-75h60v75q137 14 228 105t105 228h75v60h-75q-14 137-105 228T510-117v75h-60Zm30-134q125 0 214.5-89.5T784-480q0-125-89.5-214.5T480-784q-125 0-214.5 89.5T176-480q0 125 89.5 214.5T480-176Zm0-154q-63 0-106.5-43.5T330-480q0-63 43.5-106.5T480-630q63 0 106.5 43.5T630-480q0 63-43.5 106.5T480-330Z" />{" "}
  </svg>
);
export default function Encabezado(props) {
  return (
    <header id="header">
      <input
        className="weather__search_button"
        type="button"
        value="Search for Places"
        onClick={() => {
          props.setOpenNav(true);
        }}
      />

      <span
        className="material-symbols-outlined icon_ubicar"
        onClick={() => {
          props.getWeatherByGeoLocation();
        }}
      >
        {iconTarg}
      </span>
    </header>
  );
}
