import Image from "next/image";
import styles from "./page.module.css";
import LadoIz from "@/components/LadoIz";
import LadoD from "@/components/LadoD";
export default function Home() {
  return (
    <div className="container">
      <LadoIz />
      <LadoD />
    </div>
  );
}
