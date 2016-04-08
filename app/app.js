/*global App (for now) */

var app = app || {};

function initApp() {
    app.randomStudentsView.init(app.studentsModel);
    app.allStudentsView.init(app.studentsModel);
    app.sortStudentsView.init(app.studentsModel);

    app.studentsModel.loadStudents();
}

window.addEventListener("load", initApp);
