export const cpp: subjects.Cpp = new subjects.Cpp();
export const react: subjects.React = new subjects.React();
export const java: subjects.Java = new subjects.Java();

export const cTeacher: subjects.Teacher = {
  firasName: 'Ahmed',
  lastName: 'Muawia',
  experienceTeachingC = 10,
}

console.log("C++");

cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("Java");

java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
