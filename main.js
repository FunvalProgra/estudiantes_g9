const form = document.querySelector("#form");
const tbody = document.querySelector("#tbody");

let estudiantes = [];

//verificar si hay informacion en localStorage
getLocal();
generateTable(estudiantes);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // obtener valores
  let estudiante = {
    id: estudiantes.length + 1,
    name : form.name.value,
    lastName : form.lastName.value,
    grado : form.grado.value,
    calificacion : form.calificacion.value
  }

  estudiantes.push(estudiante);


  generateTable(estudiantes);
  
  // guardar en localStorage
  setLocal();
  
  // limpiar el formulario y enfocar en el primer input
  form.reset();
  form.name.focus();
});

function generateTable(estudiantes) {
  tbody.innerHTML = "";
  estudiantes.forEach( estudiante => tbody.innerHTML += createRow(estudiante))
}

function createRow(estudiante) {
  return `
  <tr>
    <th scope="row">${estudiante.id}</th>
    <td>${estudiante.name}</td>
    <td>${estudiante.lastName}</td>
    <td>${estudiante.grado}</td>
    <td>${estudiante.calificacion}</td>
  </tr>  
  `
}


/* LOCAL STORAGE */

function getLocal() {
  
  let data = localStorage.getItem("estudiantes");

  if (data) {
    estudiantes = JSON.parse(data);
  }
}

function setLocal() {
  let data = JSON.stringify(estudiantes);

  localStorage.setItem("estudiantes", data);
}