function Student(firstName, lastName, grades = []) {
    this.firstName = firstName,
    this.lastName =  lastName,
    this.grades = grades
}

Student.prototype.inputNewGrade = function(grade) {
    this.grades.push(grade);
}

Student.prototype.computeAvarageGrade = function() {
    return this.grades.reduce((avg, item, index, arr) => avg + item/arr.length, 0);
}


let students = [];

let stu1 = new Student("amit", "ghosh");
stu1.inputNewGrade(5);
stu1.inputNewGrade(5);
stu1.inputNewGrade(5);

students.push(stu1);

let stu2 = new Student("sudhi", "makeroni");
stu2.inputNewGrade(1);
stu2.inputNewGrade(1);
stu2.inputNewGrade(1);


students.push(stu2);

console.log(students.reduce(((avg, item, idx, arr) => avg + item.computeAvarageGrade()/arr.length), 0));




