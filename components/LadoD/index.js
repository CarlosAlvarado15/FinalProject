"use client";
import React from "react";
import "./LadoD.css";
import BotonesGrados from "../BotonesGrados";
import PronosticoT from "../PronosticoT";
import Cards from "../Cards";
import Footer from "../Footer";
import Otros from "../Otros";

export default function LadoD(props) {
  return (
    <div className="rightSide">
      <BotonesGrados />
      <PronosticoT>
        <Cards />
      </PronosticoT>
      <Otros />
      <Footer />
    </div>
  );
}
