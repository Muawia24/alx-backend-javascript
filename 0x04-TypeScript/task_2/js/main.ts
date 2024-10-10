interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }
  getCoffeeBreak() {
    return 'Getting a coffee break';
  }
  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }

  getCoffeeBreak() {
    return 'Cannot have a break';
  }

  workTeacherTasks() {
    return 'Getting to work';
  }
}

function createEmployee(salary: string | number): Teacher | Director {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

function isDirector(employee: Director | Teacher): boolean {
  if (employee instanceof Director) {
    return true;
  }
  return false;
}

function executeWork(employee: Director | Teacher): void {
  const task = isDirector(employee))? employee.workDirectorTasks() : employee.workTeacherTasks();
  console.log(task);
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (typeof todayClass === 'Math'){
    return 'Teaching Math';
  }
  return 'Teaching History';
}
