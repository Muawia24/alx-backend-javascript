export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const arg of array) {
    newArr.push(appendString + arg);
  }

  return newArr;
}
