"use client";

import { useState } from "react";
import styles from "./box.module.css";

const modules = [
  {
    label: "Module 1",
    options: [
      { value: "l1", text: "Leçon 1" },
      { value: "l2", text: "Leçon 2" },
      { value: "l3", text: "Leçon 3" },
      { value: "l4", text: "Leçon 4" },
      { value: "m1", text: "Toutes les leçons du module 1" },
    ],
  },
  {
    label: "Module 2",
    options: [
      { value: "l5", text: "Leçon 5" },
      { value: "l6", text: "Leçon 6" },
      { value: "l7", text: "Leçon 7" },
      { value: "l8", text: "Leçon 8" },
      { value: "m2", text: "Toutes les leçons du module 2" },
    ],
  },
  {
    label: "Module 3",
    options: [
      { value: "l9", text: "Leçon 9" },
      { value: "l10", text: "Leçon 10" },
      { value: "l11", text: "Leçon 11" },
      { value: "m3", text: "Toutes les leçons du module 3" },
    ],
  },
  {
    label: "Objectif Japon",
    options: [{ value: "all", text: "Tout les modules!" }],
  },
];

function Options() {
  return modules.map((module) => (
    <optgroup key={module.label} label={module.label}>
      {module.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </optgroup>
  ));
}

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
