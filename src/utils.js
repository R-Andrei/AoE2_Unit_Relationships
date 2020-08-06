export const capWords = (words) =>
  words
    .split(/\s+/)
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(" ");
