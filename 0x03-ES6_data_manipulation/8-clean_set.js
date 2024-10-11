export default function cleanSet(set, startString) {
  const str = [];

  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  set.forEach((element) => {
    if (element && element.startsWith(startString)) {
      str.push(element.slice(startString.length));
    }
  });
  return str.join('-');
}
