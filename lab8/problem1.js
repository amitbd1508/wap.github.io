let student = {
    firstName: '',
    lastName: '',
    grades: [],
    inputNewGrade: function(grade) {
        this.grades.push(grade);
    },
    computeAvarageGrade() {
        return this.grades.reduce((avg, item, index, arr) => avg + item/arr.length, 0);
    }
}


let students = [];

let stu1 = Object.create(student);
stu1.firstName = 'Student 1 Fname'
stu1.lastName = 'Student 1 Lname'
stu1.inputNewGrade(5);
stu1.inputNewGrade(5);
stu1.inputNewGrade(5);

students.push(stu1);

let stu2 = Object.create(student);
stu2.firstName = 'Student 2 Fname'
stu2.lastName = 'Student 2 Lname'
stu2.inputNewGrade(1);
stu2.inputNewGrade(1);
stu2.inputNewGrade(1);

students.push(stu2);

console.log(students.reduce(((avg, item, idx, arr) => avg + item.computeAvarageGrade()/arr.length), 0));




