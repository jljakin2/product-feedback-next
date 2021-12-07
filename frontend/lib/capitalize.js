export default function capitalize(word) {
  // Take the category and capitalize the first letter
  const arr = word.split("");

  // specific only to this app, since we are tracking "inProgress" as a status and we want to show it as two words to the
  // user, we need this conditional so we can add a space into the split array before joining it back together
  if (word === "inProgress") {
    arr.splice(2, 0, " ");
  }

  arr[0] = arr[0].toUpperCase();

  return arr.join("");
}
