
function validarFormulario() {
    let pais = document.getElementById("pais").value;
    let nacionalidad = document.getElementById("nacionalidad").value;
    let sexo = document.getElementById("sexo").value;
    let edad = document.getElementById("edad").value;
    let viajaCon = document.getElementById("viajaCon").value;
    let numPersonas = document.getElementById("numPersonas") ? document.getElementById("numPersonas").value : null;

    if (!pais || !nacionalidad || !sexo || !edad || !viajaCon) {
        alert("Todos los campos son obligatorios.");
        return false;
    }

    if (isNaN(edad) || edad <= 0) {
        alert("La edad debe ser un número válido.");
        return false;
    }

    if (viajaCon !== "Solo" && (!numPersonas || isNaN(numPersonas) || numPersonas <= 0)) {
        alert("Debe indicar con cuántas personas viaja.");
        return false;
    }

    return true;
}