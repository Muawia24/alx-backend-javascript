export default function hasValuesFromArray(set, elementsArr) {
  for (const x of elementsArr) {
    if (!set.has(x)) {
      return false;
    }
  }
  return true;
}
