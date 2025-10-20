import badwords from "../data/misuh.json";

const normalize = (str) =>
  String(str || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[@4]/g, "a")
    .replace(/\$|5/g, "s")
    .replace(/1/g, "i")
    .replace(/0/g, "o")
    .replace(/3/g, "e")
    .replace(/(.)\1{2,}/g, "$1$1");

export function containsBadWords(value) {
  const normalized = normalize(value);
  for (const word of badwords) {
    const regex = new RegExp(`\\b${word}\\b`, "i");
    if (regex.test(normalized)) return word;
  }
  return null;
}
