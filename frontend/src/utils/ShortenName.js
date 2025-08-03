export default function shortenName(name, maxLength = 21, alwaysShorten = ["MUHAMMAD", "MUHAMAD","MOHAMMAD","MOHAMAD"]) {
  if (!name || typeof name !== "string") return "";

  const normalizedAlwaysShorten = alwaysShorten.map(w => w.toLowerCase());
  const originalParts = name.trim().split(/\s+/);

  // Step 1: Apply forced abbreviations
  const shortenedParts = originalParts.map(part => {
    return normalizedAlwaysShorten.includes(part.toLowerCase())
      ? part[0].toUpperCase() + "."
      : part;
  });

  // Step 2: If it's already short enough, return
  if (shortenedParts.join(" ").length <= maxLength) {
    return shortenedParts.join(" ");
  }

  // Step 3: Progressively shorten from the end (except first name)
  const finalParts = [...shortenedParts];
  for (let i = finalParts.length - 1; i > 0; i--) {
    const original = originalParts[i];
    if (!normalizedAlwaysShorten.includes(original.toLowerCase())) {
      finalParts[i] = original[0].toUpperCase() + ".";
    }
    if (finalParts.join(" ").length <= maxLength) {
      return finalParts.join(" ");
    }
  }

  // Step 4: If still too long, shorten first name too (unless forced)
  const first = originalParts[0];
  if (!normalizedAlwaysShorten.includes(first.toLowerCase())) {
    const cutoff = maxLength - 1;
    return first.slice(0, cutoff) + "…";
  } else {
    // First name is also forced to shorten, so shorten everything and check
    finalParts[0] = first[0].toUpperCase() + ".";
    const forced = finalParts.join(" ");
    return forced.length <= maxLength
      ? forced
      : forced.slice(0, maxLength - 1) + "…";
  }
}
