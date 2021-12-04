export default function capitalize(word) {
  // Take the category and capitalize the first letter
  const arr = word.split("");
  arr[0] = arr[0].toUpperCase();

  return arr.join("");
}
