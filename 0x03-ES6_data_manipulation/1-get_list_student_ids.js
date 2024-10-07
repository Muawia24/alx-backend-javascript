export default function getListStudentId(listObjs) {
  if (typeof listObjs !== 'object') {
    return [];
  }

  const ids = [];
  listObjs.forEach((obj) => {
    ids.push(obj.id);
  });

  return ids;
}
