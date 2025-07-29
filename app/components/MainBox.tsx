"use client";

import { useState } from "react";
import GuessBox from "./GuessBox";
import SelectBox from "./SelectBox";
import _vocabulary from "../../vocabulary.json";
import { IVocabulary } from "../types";
import { shuffle } from "lib/utils";
import Dialog from "./Dialog";

export default function MainBox() {
  const [vocabulary, setVocabulary] = useState<IVocabulary[] | null>(null);
  const [isFirstRun, setIsFirstRun] = useState(true);
  const [shouldDisplayDialog, setShouldDisplayDialog] = useState(false);

  const handleClick = (lesson: string, quantity: string) => {
    if (process.env.NODE_ENV === "production") {
      fetch("https://vocabulaire-objectif-japon.netlify.app/api/studies");
    }

    const selectedVocabulary = (_vocabulary as IVocabulary[]).filter((item) => {
      if (lesson === "all") {
        return true;
      } else if (lesson.startsWith("l")) {
        return item.lesson === lesson;
      } else if (lesson.startsWith("m")) {
        return item.module === lesson;
      } else {
        return false;
      }
    });

    if (selectedVocabulary.length === 0) {
      return;
    }

    const shuffledVocabulary = shuffle(selectedVocabulary);
    setVocabulary(
      shuffledVocabulary.slice(0, quantity === "100" ? -1 : parseInt(quantity))
    );
  };

  return (
    <div>
      {vocabulary ? (
        <GuessBox
          reset={() => {
            setVocabulary(null);
            if (isFirstRun) {
              setIsFirstRun(false);
              setShouldDisplayDialog(true);
            }
          }}
          vocabulary={vocabulary}
        />
      ) : (
        <SelectBox handleClick={handleClick} />
      )}
      {
        <Dialog
          isOpen={shouldDisplayDialog}
          onClick={() => {
            setShouldDisplayDialog(false);
          }}
        />
      }
    </div>
  );
}
