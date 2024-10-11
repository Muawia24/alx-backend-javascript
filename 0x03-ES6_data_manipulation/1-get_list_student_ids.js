export default function getListStudentId(listObjs) {
  if (!(listObjs instanceof Array)) {
    return [];
  }

  const ids = listObjs.map((obj) => obj.id);

  return ids;
}
