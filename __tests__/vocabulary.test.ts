import vocabulary from "../vocabulary.json";

describe("Vocabulary JSON Tests", () => {
  it("should ensure kana and translation are not empty strings", () => {
    vocabulary.forEach((entry) => {
      expect(entry.kana).not.toBe("");
      expect(entry.translation).not.toBe("");
    });
  });

  it("should ensure each entry has both kana and translation properties", () => {
    vocabulary.forEach((entry) => {
      expect(entry).toHaveProperty("kana");
      expect(entry).toHaveProperty("translation");
      expect(entry).toHaveProperty("kanji");
      expect(entry).toHaveProperty("module");
      expect(entry).toHaveProperty("lesson");
    });
  });

  it("should ensure kana and translation are strings", () => {
    vocabulary.forEach((entry) => {
      expect(typeof entry.kanji).toBe("string");
      expect(typeof entry.kana).toBe("string");
      expect(typeof entry.translation).toBe("string");
    });
  });

  it("should ensure properties are not NaN", () => {
    vocabulary.forEach((entry) => {
      expect(entry.translation).not.toBe(NaN);
      expect(entry.kana).not.toBe(NaN);
      expect(entry.kanji).not.toBe(NaN);
    });
  });

  it("should ensure no line break are present", () => {
    vocabulary.forEach((entry) => {
      expect(entry.translation).not.toContain("\n");
      expect(entry.kana).not.toContain("\n");
      expect(entry.kanji).not.toContain("\n");
    });
  });

  it("should ensure module format starts with an 'm' and ends with a number", () => {
    vocabulary.forEach((entry) => {
      expect(entry.module).toMatch(/^m\d+$/);
    });
  });

  it("should ensure lesson format starts with an 'l' and ends with a number", () => {
    vocabulary.forEach((entry) => {
      expect(entry.lesson).toMatch(/^l\d+$/);
    });
  });

  it("should ensure no kanji is the header", () => {
    vocabulary.forEach((entry) => {
      expect(entry.kanji).not.toMatch("kanji");
    });
  });

  it("should ensure no kana is the header", () => {
    vocabulary.forEach((entry) => {
      expect(entry.kana).not.toMatch("kana");
    });
  });

  it("should ensure no translation is the header", () => {
    vocabulary.forEach((entry) => {
      expect(entry.translation).not.toMatch("translation");
    });
  });

  xit("should ensure kanji and kana do not have white spaces", () => {
    vocabulary.forEach((entry) => {
      if (entry.kanji.indexOf(" ") !== -1) {
        console.log(entry.kanji);
      }
      if (entry.kana.indexOf(" ") !== -1) {
        console.log(entry.kana);
      }
    });
  });
});
