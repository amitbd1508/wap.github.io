let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
      const self = this;
      this.students.forEach(function (student) {
        console.log(self.title + ": " + student);
      }.bind(this));
    },
  };
  
  group.showList();



// soulution with arrow functions 

// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],
//   showList: function () {
//     this.students.forEach( (student) => {
//       console.log(this.title + ": " + student);
//     });
//   },
// };

// 


let group2 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
      this.students.forEach((stu) => function () {
        console.log(this.title + ": " + stu);
      }.call(this));
    },
  };
  
  group2.showList();








 