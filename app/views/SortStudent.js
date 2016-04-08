var app = app || {};

app.sortStudentsView = {

    init: function(model) {

        this.model = model;

        var templateSrc = document.querySelector("#sortStudent-template").innerHTML;
        this.container = document.querySelector(".topStudents");
        this.template = Handlebars.compile(templateSrc);

        this.sortSelect = document.querySelector("#sortStudents");

        this.sortSelect.addEventListener("click", this.getStudents.bind(this));
        this.model.addListener("CHANGE", this.getStudents.bind(this));
    },

    render: function(data) {
        this.container.innerHTML = this.template(data);
    },
    getStudents: function(e) {
        var selectedValue = this.sortSelect.value.split(":"),
            key = selectedValue[0],
            isDescending = selectedValue[1] == "true";

        var sortStudent = this.model.sortStudents(key, isDescending);
        this.render(sortStudent);
    }
}
