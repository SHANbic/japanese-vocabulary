"use client";

import styles from "./guess-box.module.css";
import styles2 from "./box.module.css";
import { useState, useRef, useEffect } from "react";
import { obfuscateString } from "../../lib/utils";
import type { IVocabulary } from "../types";

const maxGuessLevel = 4;

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
    if (!vocabulary[currentIndex] || guessLevel >= maxGuessLevel) return;
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
      setGuessLevel(maxGuessLevel);
    }
  };

  const handleNextBtnClick = () => {
    if (
      vocabulary.length - currentIndex - 1 === 0 &&
      guessLevel === maxGuessLevel
    ) {
      reset();
    } else {
      if (guessLevel === maxGuessLevel) {
        populateQuestion();
      } else {
        handleHelpBtnClick(true);
      }
    }
  };

  return (
    <div className={styles2.box}>
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
          <span id={styles.remainingQuestions}>
            {(vocabulary.length - currentIndex).toString()}
          </span>
        </p>
      </div>
      <p className="text-center text-lg font-bold my-4">
        Comprends-tu le sens de ceci?
      </p>
      <>
        <div className={styles.currentGuess}>
          <p id={styles.kanji} className="h-10">
            {vocabulary[currentIndex]?.kanji}
          </p>
          <p
            id={styles.kana}
            style={{ opacity: guessLevel >= 1 ? 1 : 0 }}
            className="h-10"
          >
            {vocabulary[currentIndex]?.kana}
          </p>
          <p
            className="h-10"
            ref={translation}
            id={styles.translation}
            style={{ opacity: guessLevel >= 2 ? 1 : 0 }}
          >
            {vocabulary[currentIndex]?.translation}
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
            disabled={guessLevel === maxGuessLevel}
            onClick={() => handleHelpBtnClick(false)}
            className={`btn large ${
              guessLevel === maxGuessLevel ? "disabled" : ""
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
            {guessLevel === maxGuessLevel ? <span>👉</span> : <span>👍</span>}
          </button>
        </div>
      </>
    </div>
  );
}
