export interface IVocabulary {
  kanji: string;
  kana: string;
  translation: string;
  lesson: string;
  module: string;
}

export interface IOptions {
  questionsCount: number;
  translationTo: "japanese" | "french";
}
