import Image from "next/image";
import Cta from "./components/Cta";
import sophie from "../public/sophie-voyage-rouge.png";
import "./globals.css";
import MainBox from "./components/MainBox";

export default function Home() {
  if (process.env.NODE_ENV === "production") {
    fetch("https://vocabulaire-objectif-japon.netlify.app/api/visits");
  }
  return (
    <div id="container">
      <main>
        <div id="sophie-wrapper">
          <Image
            src={sophie}
            alt="sophie-objectif-japon"
            // loading={"eager"}
            priority
          />
        </div>
        <MainBox />
        <div className="mt-10">
          <Cta />
        </div>
      </main>
    </div>
  );
}
