export default function cleanSet(set, startString) {
  const str = [];

  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const element of set) {
    if (element.startsWith(startString)) {
      str.push(element.slice(startString.length));
    }
  }
  return str.join('-');
}
