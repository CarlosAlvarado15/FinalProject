import Image from "next/image";
import styles from "./page.module.css";
import LadoIz from "@/components/LadoIz";
import LadoD from "@/components/LadoD";
import React, { use } from "react";

export default function Home() {
  return (
    <div className="container">
      <LadoIz />
      <LadoD />
    </div>
  );
}
// no se por que la palabra use no se esta funcioando que version de node tienes? dame chace
