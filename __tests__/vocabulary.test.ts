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
    });
  });

  it("should ensure kana and translation are strings", () => {
    vocabulary.forEach((entry) => {
      expect(typeof entry.kana).toBe("string");
      expect(typeof entry.translation).toBe("string");
    });
  });
});
