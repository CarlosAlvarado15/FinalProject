import React from "react";
import "./BotonesGrados.css";

export default function BotonesGrados(props) {

  const onClickButton_F = () => {
    props.setChangeTemp("°F");
  };
  const onClickButton_c = () => {
    props.setChangeTemp("°C");
  };
  return (
    <div className="convertTemperature__buttom">
      <button className="Temperature__buttom_c" onClick={onClickButton_c}>
        °C
      </button>

      <button className="Temperature__buttom_f" onClick={onClickButton_F}>
        °F
      </button>
    </div>
  );
}
