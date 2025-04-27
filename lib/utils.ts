export function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function obfuscateString(str: string) {
  if (str.length <= 1) return str;

  const alphanumeric = str.replace(/[^a-zA-Z0-9]/g, "");
  const numToReplace = Math.max(1, Math.floor((3 / 5) * alphanumeric.length));
  const indices = new Set();

  while (indices.size < numToReplace) {
    const randomIndex = Math.floor(Math.random() * alphanumeric.length);
    indices.add(randomIndex);
  }

  let alphanumericIndex = 0;
  return str
    .split("")
    .map((char, index) => {
      if (index === 0 || /[^a-zA-Z0-9]/.test(char)) {
        alphanumericIndex++;
        return char;
      }
      const shouldReplace = indices.has(alphanumericIndex);
      alphanumericIndex++;
      return shouldReplace ? "-" : char;
    })
    .join("");
}
