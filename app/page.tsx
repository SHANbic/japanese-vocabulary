"use client";
import Image from "next/image";
import Cta from "./components/Cta";
import sophie from "../public/sophie-voyage-rouge.png";
import "./globals.css";
import MainBox from "./components/MainBox";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      fetch("https://vocabulaire-objectif-japon.netlify.app/api/views");
    }
  }, []);

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
          <Cta
            text="Aller sur Objectif Japon"
            href="https://www.objectif-japon.com/formation/index/"
            onClick={() => {
              if (process.env.NODE_ENV === "production") {
                fetch(
                  "https://vocabulaire-objectif-japon.netlify.app/api/objectif-japon"
                );
              }
            }}
          />
        </div>
      </main>
    </div>
  );
}
