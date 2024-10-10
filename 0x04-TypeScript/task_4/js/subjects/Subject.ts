/// <reference path="Teacher.ts" />

namespace Subjects {
  export class subject implements Teacher{
    teacher: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
