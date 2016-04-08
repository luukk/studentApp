var app = app || {};

app.studentsModel = Object.create(eventDispatcher);

app.studentsModel.loadStudents = function() {

    var self = this,
        httpRequest = new HttpRequest();

    httpRequest.load("api/index.php", function(data) {
        self.students = data;
        self.dispatch("CHANGE");
    });
};

app.studentsModel.randomStudent = function() {
    var random = Math.floor(Math.random() * this.students.length);
    return this.students[random];
};

app.studentsModel.sortStudents = function(key, bool) {
    var copy = this.students.concat();

    if (bool == true) {
        direction = 1;
    } else {
        direction = -1;
    }
    copy.sort(function(a, b) {
        if (a[key] < b[key]) {
            return direction;
        } else {
            return -direction;
        }
    });

    return copy.slice(0, 3);
}

app.studentsModel.allStudents = function() {
    return this.students;
};
