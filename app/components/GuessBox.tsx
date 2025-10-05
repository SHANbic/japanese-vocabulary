"use client";

import guessBoxStyles from "./guess-box.module.css";
import boxStyles from "./box.module.css";
import { useState, useRef, useEffect } from "react";
import { obfuscateString } from "../../lib/utils";
import type { IVocabulary } from "../types";

const MAX_GUESS_LEVEL = 4;

export default function GuessBox({
  vocabulary,
  reset,
}: {
  vocabulary: IVocabulary[];
  reset: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [guessLevel, setGuessLevel] = useState(0);
  const translation = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    populateQuestion();
  }, []);

  const populateQuestion = () => {
    setGuessLevel(0);
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);

    if (!vocabulary[newIndex].kanji) {
      setGuessLevel(1);
    }
  };

  const cleanQuestions = (): void => {
    setCurrentIndex(0);
    setGuessLevel(0);
  };

  const handleHelpBtnClick = (force = false) => {
    if (!vocabulary[currentIndex] || guessLevel >= MAX_GUESS_LEVEL) return;
    if (guessLevel === 0) {
      setGuessLevel(guessLevel + 1);
    } else if (guessLevel === 1) {
      if (translation && translation.current && translation.current.innerText) {
        translation.current.innerText = vocabulary[currentIndex].translation
          .split("")
          .map((char, index) =>
            index !== 0 && /[a-zA-Z0-9]/.test(char) ? "-" : char
          )
          .join("");
      }

      setGuessLevel(guessLevel + 1);
    } else if (guessLevel === 2) {
      if (translation && translation.current && translation.current.innerText) {
        translation.current.innerText = obfuscateString(
          vocabulary[currentIndex].translation
        );
      }
      setGuessLevel(guessLevel + 1);
    } else {
      if (translation && translation.current && translation.current.innerText) {
        translation.current.innerText = vocabulary[currentIndex]?.translation;
      }
      setGuessLevel(guessLevel + 1);
    }
    if (force) {
      if (translation && translation.current && translation.current.innerText) {
        translation.current.innerText = vocabulary[currentIndex].translation
          .split("")
          .map((char, index) =>
            index !== 0 && /[a-zA-Z0-9]/.test(char) ? "-" : char
          )
          .join("");
      }
      if (translation && translation.current && translation.current.innerText) {
        translation.current.innerText = vocabulary[currentIndex]?.translation;
      }
      setGuessLevel(MAX_GUESS_LEVEL);
    }
  };

  const handleNextBtnClick = () => {
    if (
      vocabulary.length - currentIndex - 1 === 0 &&
      guessLevel === MAX_GUESS_LEVEL
    ) {
      reset();
    } else {
      if (guessLevel === MAX_GUESS_LEVEL) {
        populateQuestion();
      } else {
        handleHelpBtnClick(true);
      }
    }
  };

  return (
    <div className={boxStyles.box}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => {
            cleanQuestions();
            reset();
          }}
        >
          👈 Retour
        </button>
        <p>
          plus que{" "}
          <span id={guessBoxStyles.remainingQuestions}>
            {(vocabulary.length - currentIndex).toString()}
          </span>
        </p>
      </div>
      <p className="text-center text-lg font-bold my-4">
        Comprends-tu le sens de ceci?
      </p>

      <div className={guessBoxStyles.currentGuess}>
        <p id={guessBoxStyles.kanji} className="h-10">
          {vocabulary[currentIndex]?.kanji}
        </p>
        <p
          id={guessBoxStyles.kana}
          style={{ opacity: guessLevel >= 1 ? 1 : 0 }}
          className="h-10"
        >
          {vocabulary[currentIndex]?.kana}
        </p>
        <p
          className="h-10"
          ref={translation}
          id={guessBoxStyles.translation}
          style={{ opacity: guessLevel >= 2 ? 1 : 0 }}
        >
          {vocabulary[currentIndex]?.translation}
        </p>
      </div>

      <div className="flex justify-between">
        <p className="text-gray-400 text-sm">
          {"Module " + vocabulary[currentIndex]?.module.slice(1)}
        </p>
        <p className="text-gray-400 text-sm">
          {"Leçon " + vocabulary[currentIndex]?.lesson.slice(1)}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        <button
          disabled={guessLevel === MAX_GUESS_LEVEL}
          onClick={() => handleHelpBtnClick(false)}
          className={`btn large ${
            guessLevel === MAX_GUESS_LEVEL ? "disabled" : ""
          }`}
        >
          👎
        </button>
        <button
          onClick={() => {
            handleNextBtnClick();
          }}
          className="next btn large"
        >
          {guessLevel === MAX_GUESS_LEVEL ? <span>👉</span> : <span>👍</span>}
        </button>
      </div>
    </div>
  );
}
