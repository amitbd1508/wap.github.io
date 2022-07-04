let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],
    i: 0,
    showList: function() {

        setInterval(console.log, 100, i)
        this.students.forEach(function(student) {
            i++;

            console.log(this.title + ": " + student);

        });

    }

};

group.showList();