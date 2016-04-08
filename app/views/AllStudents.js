app.allStudentsView = {

    init: function(model) {

        this.model = model;

        this.leftEye = document.querySelector('.leftEye');
        this.rightEye = document.querySelector('.rightEye');
        this.body = document.querySelector('.body');
        var templateSrc = document.querySelector("#allStudents-template").innerHTML;

        this.template = Handlebars.compile(templateSrc);
        this.container = document.querySelector(".allStudents");


        this.model.addListener("CHANGE", this.allStudents.bind(this));

        this.container.addEventListener("click", this.studentClicked.bind(this));
    },

    render: function(data) {
        this.container.innerHTML = this.template(data);
    },

    studentClicked: function(e) {
        var clickedRow = e.target,
            personData = clickedRow.dataset.id; // we gebruiken .dataset.id om het attributt data-id uit te lezen
        var eyecolor = personData.substr(0, personData.indexOf(','));
        var height = personData.substr(personData.lastIndexOf(',') + 1, personData.length);

        this.leftEye.style.backgroundColor = eyecolor;
        this.rightEye.style.backgroundColor = eyecolor;
        this.body.style.height = height;
    },

    allStudents: function(e) {
        var allStudents = this.model.allStudents();
        this.render(allStudents);
        console.log(allStudents);
    }
}
