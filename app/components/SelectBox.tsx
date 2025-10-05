"use client";

import { useState } from "react";
import styles from "./box.module.css";
import { modules } from "app/modules";

const Options = () => {
  return modules.map((module) => (
    <optgroup key={module.label} label={module.label}>
      {module.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </optgroup>
  ));
};

export default function SelectBox(props: {
  handleClick: (a: string, b: string) => void;
}) {
  const [selectedLesson, setSelectedLesson] = useState<string>("l1");
  const [selectedQuantity, setSelectedQuantity] = useState<string>("10");

  return (
    <div className={styles.box}>
      <p className="text-center text-lg font-bold my-4">
        Quelle leçon souhaites-tu réviser?
      </p>
      <select
        onChange={(e) => setSelectedLesson(e.target.value)}
        value={selectedLesson}
        className="select"
      >
        <Options />
      </select>

      <div className="mt-8">
        <p className="text-center text-lg font-bold mb-4">
          Quantité de vocabulaire à réviser?
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <label
            className="p-1 rounded"
            style={{
              backgroundColor: selectedQuantity === "10" ? "#ffedeb" : "",
            }}
          >
            <input
              type="radio"
              id="10"
              name="quantity"
              value="10"
              defaultChecked
              onChange={(e) => setSelectedQuantity(e.target.value)}
            />
            <span> 10</span>
          </label>
          <label
            className="p-1 rounded"
            style={{
              backgroundColor: selectedQuantity === "20" ? "#ffedeb" : "",
            }}
          >
            <input
              type="radio"
              id="20"
              name="quantity"
              value="20"
              onChange={(e) => setSelectedQuantity(e.target.value)}
            />
            <span> 20</span>
          </label>
          <label
            className="p-1 rounded"
            style={{
              backgroundColor: selectedQuantity === "30" ? "#ffedeb" : "",
            }}
          >
            <input
              type="radio"
              id="30"
              name="quantity"
              value="30"
              onChange={(e) => setSelectedQuantity(e.target.value)}
            />
            <span> 30</span>
          </label>
          <label
            className="p-1 rounded"
            style={{
              backgroundColor: selectedQuantity === "100" ? "#ffedeb" : "",
            }}
          >
            <input
              type="radio"
              id="100"
              name="quantity"
              value="100"
              onChange={(e) => setSelectedQuantity(e.target.value)}
            />
            <span> tout</span>
          </label>
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <button
          className="btn"
          onClick={() => props.handleClick(selectedLesson, selectedQuantity)}
        >
          <span className="font-bold">Commencer à réviser</span>
        </button>
      </div>
    </div>
  );
}
