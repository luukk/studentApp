var app = app || {};

// maak hier een app.randomStudentView object
// dit object is je koppeling met je html om random studenten te kunnen laten zien
// als je op shuffle klikt, dan moet dit script dit afvangen en actie ondernemen
// om bij de model iets op te halen

app.allStudentsView = {

  // onze init functie voeren we 1x uit
  // deze functie initialiseert alles
  init: function(model) {

    this.model = model;

    // Grab the template script from the dom
    var templateSrc = document.querySelector("#allStudents-template").innerHTML;

    this.template = Handlebars.compile(templateSrc);
    this.container = document.querySelector(".allStudents");

    // de functie bind() zorgt ervoor dat je kunt vastzetten waar 'this' naar verwijst
    this.model.addListener("CHANGE", this.allStudents.bind(this));

    this.container.addEventListener("click", this.studentClicked.bind(this));
  },

  render: function(data) {
    this.container.innerHTML = this.template(data);
  },


  studentClicked: function(e) {
    // elke event die gebeurd (click, mousemove, etc.) geeft een event parameter
    // dit event object geeft je veel informatie over wat er is gebeurd
    // bijvoorbeeld op wie er is geklikt
    var clickedRow = e.target,
      eyecolor = clickedRow.dataset.id; // we gebruiken .dataset.id om het attributt data-id uit te lezen

    // we weten nu op wie er is geklikt
    console.log(eyecolor);
  },

  allStudents: function(e) {
    var allStudents = this.model.allStudents();
    this.render(allStudents);
    console.log(allStudents);
  }
}
