var app = app || {};

// maak hier een app.randomStudentView object
// dit object is je koppeling met je html om random studenten te kunnen laten zien
// als je op shuffle klikt, dan moet dit script dit afvangen en actie ondernemen
// om bij de model iets op te halen

app.randomStudentsView = {

  // onze init functie voeren we 1x uit
  // deze functie initialiseert alles
  init: function(model) {

    this.model = model;

    // Grab the template script from the dom
    var templateSrc = document.querySelector("#randomStudent-template").innerHTML;

    this.template = Handlebars.compile(templateSrc);
    this.container = document.querySelector(".shuffleStudent");
    this.shuffleButton = document.querySelector("#shuffle");

    // de functie bind() zorgt ervoor dat je kunt vastzetten waar 'this' naar verwijst
    this.shuffleButton.addEventListener("click", this.shuffleStudent.bind(this));

    this.model.addListener("CHANGE", this.shuffleStudent.bind(this));

    this.container.addEventListener("click", this.studentClicked.bind(this));
  },

  render: function(data) {
    this.container.innerHTML = this.template(data);
  },

  shuffleStudent: function(e) {
    // haal een random student op bij de model
    // en gebruik this.template() om vervolgens de template te updaten

    var randomStudent = this.model.randomStudent();
    // Transform the HTML template into a 'real' template
    //this.render(testData);
    this.render(randomStudent);
    // als voorbeeld gooi ik de container met namen leeg. Ik mag nu bij this.container
    // omdat we met bind(this) zelf hebben gekozen waar 'this' naar moet verwijzen
    //this.container.innerHTML = "";
  },

  studentClicked: function(e) {
    // elke event die gebeurd (click, mousemove, etc.) geeft een event parameter
    // dit event object geeft je veel informatie over wat er is gebeurd
    // bijvoorbeeld op wie er is geklikt
    var clickedRow = e.target,
      id = clickedRow.dataset.id; // we gebruiken .dataset.id om het attributt data-id uit te lezen

    // we weten nu op wie er is geklikt
    console.log(id);
  }
}
