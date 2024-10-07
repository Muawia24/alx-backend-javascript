export default function getStudentsByLocation(listObjs, city) {
  if (typeof listObjs !== 'object') {
    return [];
  }

  return listObjs.filter((obj) => obj.location === city);
}
