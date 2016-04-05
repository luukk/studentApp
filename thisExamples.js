/*// student
var student = {
    name: "Henkie",
    lastName: "Smeets",
    getFullName: function(){
        console.log(this);
        return this.name + " " + this.lastName;
    }
};

var newStudent = {
    name: "Ronny",
    lastName: "Boer",
    getFullName: student.getFullName
};

console.log( student.getFullName() );
console.log( newStudent.getFullName() );

// setTimeout*/
