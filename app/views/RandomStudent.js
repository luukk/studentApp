var app = app || {};

app.randomStudentsView = {

    init: function(model) {

        this.model = model;

        var templateSrc = document.querySelector("#randomStudent-template").innerHTML;

        this.template = Handlebars.compile(templateSrc);
        this.container = document.querySelector(".shuffleStudent");
        this.shuffleButton = document.querySelector("#shuffle");

        this.shuffleButton.addEventListener("click", this.shuffleStudent.bind(this));

        this.model.addListener("CHANGE", this.shuffleStudent.bind(this));

        this.container.addEventListener("click", this.studentClicked.bind(this));
    },

    render: function(data) {
        this.container.innerHTML = this.template(data);
    },

    shuffleStudent: function(e) {

        var randomStudent = this.model.randomStudent();

        this.render(randomStudent);
    },

    studentClicked: function(e) {
        var clickedRow = e.target,
            id = clickedRow.dataset.id;
    }
}
