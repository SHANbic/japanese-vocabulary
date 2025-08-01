"use client";
import Image from "next/image";
import livre from "../../public/livre-objectif-japon.webp";
import Cta from "./Cta";

export default function Dialog({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <dialog
      onClick={() => {
        onClick();
      }}
      className={`fixed top-0 left-0 bg-opacity-80 bg-black w-full h-full flex items-center justify-center
      flex-col transition duration-200 gap-2 ${!isOpen ? "hidden" : ""}`}
    >
      <button
        onClick={() => {
          onClick();
        }}
        className="bg-white text-black absolute top-5 right-5 px-2 py-1 rounded-sm"
      >
        X fermer
      </button>
      <p className="text-white text-2xl font-black text-center px-4">
        Précommandez le livre de Sophie Thomas aujourd&apos;hui et débloquez un
        bonus exclusif !
      </p>
      <Image
        src={livre}
        alt="le livre Objectif Japon"
        width={500}
        height={500}
      />
      <Cta
        href="https://preco.editions-eyrolles.com/sophie-thomas137335"
        text="Je découvre"
        onClick={() => {
          if (process.env.NODE_ENV === "production") {
            fetch(
              "https://vocabulaire-objectif-japon.netlify.app/api/preco-livre"
            );
          }
        }}
      />
    </dialog>
  );
}
