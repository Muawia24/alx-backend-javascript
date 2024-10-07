export default function getListStudentId(listObjs) {
  if (typeof listObjs !== 'object') {
    return [];
  }

  const ids = listObjs.map((obj) => obj['id']);

  return ids;
}
