let nombre = " ";
let apellido = " ";
let precioCorte = 0;
let tiempoCorte = " ";
let diaCorte = " ";
let barbero = " ";

function indicarNombre (){
    nombre = prompt ("Indique su nombre");
    apellido = prompt ("Indique su apellido");
}



alert("Usted está por agendar un turno");

indicarNombre();
continuarAgendando = confirm("Se agendará un turno a nombre de " + nombre + " " + apellido + ". ¿Desea continuar?");

while (continuarAgendando == false) {
    indicarNombre();
    continuarAgendando = confirm("Se agendará un turno a nombre de " + nombre + " " + apellido + ". ¿Desea continuar?");
}

do {
    alert("Por favor, seleccione el barbero que le interesaría cortarse.");
    barbero = prompt("Escriba el nombre del barbero, puede elegir entre Nicolas y Ricardo").toUpperCase();
    diaCorte = prompt("Indique, dentro de los días hábiles, ¿que día le interesaría?").toLowerCase();
    continuarAgendando2 = confirm("Seleccionó al barbero " + barbero + ", para el día " + diaCorte + ".");
} while ((continuarAgendando2 == false) || (barbero !== "NICOLAS" && barbero !== "RICARDO") || (diaCorte !== "lunes" && diaCorte !== "martes" && diaCorte !== "miercoles" && diaCorte !== "jueves" && diaCorte !== "viernes"));

switch(barbero){
    case "NICOLAS":
    precioCorte = 5000;
    tiempoCorte = "30m";
    break;
    case "RICARDO":
    precioCorte = 7000;
    tiempoCorte = "15m";
    break;
}

alert(nombre + " " + apellido + " has agendado un turno con " + barbero + " el día " + diaCorte + ". Deberás pagar $" + precioCorte + " y tardaremos " + tiempoCorte + " en realizar tu corte.");









