alert("¿Qué tan saludable sos? ¡Descubrelo respondiendo esta encuesta!");

// Listas por categoría
let personasSanas = [];
let personasMedias = [];
let personasNoSanas = [];

for (let i = 0; i < 3; i++) {
  let nombreUsuario = prompt("¿Cuál es tu nombre?");

  if (
    nombreUsuario === null ||
    nombreUsuario.trim() === "" ||
    !/^[a-zA-Z\s]+$/.test(nombreUsuario)
  ) {
    console.log("Encuesta finalizada o nombre inválido.");
    break;
  }

  console.log("Bienvenido/a " + nombreUsuario);
  let puntajeSalud = 0;

  let edadUsuario = prompt("¿Qué edad tenés?");
  edadUsuario = Number(edadUsuario);

  if (!isNaN(edadUsuario) && edadUsuario >= 18) {
    console.log(nombreUsuario + " es mayor de 18 años");
  } else if (edadUsuario < 18) {
    console.log(nombreUsuario + " es menor a 18 años");
  } else {
    console.log("Edad inválida. Se continúa de todas formas.");
  }

  let ejerciciosSemana = prompt("¿Cuántos días a la semana hacés ejercicio?");
  ejerciciosSemana = Number(ejerciciosSemana);
  if (!isNaN(ejerciciosSemana) && ejerciciosSemana < 3) {
    console.log(nombreUsuario + " no hace suficiente ejercicio.");
    puntajeSalud -= 2;
  } else if (!isNaN(ejerciciosSemana)) {
    console.log(nombreUsuario + " hace ejercicio suficiente.");
    puntajeSalud += 2;
  }

  let horasSuenio = prompt("¿Cuántas horas dormís por noche?");
  horasSuenio = Number(horasSuenio);
  if (!isNaN(horasSuenio) && horasSuenio < 8) {
    console.log(nombreUsuario + " no duerme lo suficiente.");
    puntajeSalud -= 2;
  } else if (!isNaN(horasSuenio)) {
    console.log(nombreUsuario + " duerme lo necesario.");
    puntajeSalud += 2;
  }

  let tomarAgua = prompt("¿Cuántos litros de agua tomás por día?");
  tomarAgua = Number(tomarAgua);
  if (!isNaN(tomarAgua) && tomarAgua < 2) {
    console.log(nombreUsuario + " no toma suficiente agua.");
    puntajeSalud -= 2;
  } else if (!isNaN(tomarAgua)) {
    console.log(nombreUsuario + " toma suficiente agua.");
    puntajeSalud += 2;
  }

  let usoDispositivos = prompt("¿Cuántas horas por día usás pantallas?");
  usoDispositivos = Number(usoDispositivos);
  if (!isNaN(usoDispositivos) && usoDispositivos > 3) {
    console.log(nombreUsuario + " usa demasiado tiempo pantallas.");
    puntajeSalud -= 2;
  } else if (!isNaN(usoDispositivos)) {
    console.log(nombreUsuario + " tiene buen control del uso de pantallas.");
    puntajeSalud += 2;
  }

  let fumadores = prompt("¿Fumás cigarrillos o vapeás regularmente? (Si/No)");
  if (fumadores && fumadores.toLowerCase() === "si") {
    console.log(nombreUsuario + " fuma o vapea.");
    puntajeSalud -= 2;
  } else if (fumadores && fumadores.toLowerCase() === "no") {
    console.log(nombreUsuario + " no fuma ni vapea.");
    puntajeSalud += 2;
  }

  let tomarAlcohol = prompt(
    "¿Tomás alcohol más de 2 veces por semana? (Si/No)"
  );
  if (tomarAlcohol && tomarAlcohol.toLowerCase().trim() === "si") {
    console.log(nombreUsuario + " toma alcohol con frecuencia.");
    puntajeSalud -= 2;
  } else if (tomarAlcohol && tomarAlcohol.toLowerCase().trim() === "no") {
    console.log(nombreUsuario + " no toma alcohol frecuentemente.");
    puntajeSalud += 2;
  }

  let consumoFrutas = prompt(
    "¿Cuántas porciones de frutas/verduras comés por día?"
  );
  consumoFrutas = Number(consumoFrutas);
  if (!isNaN(consumoFrutas) && consumoFrutas < 2) {
    console.log(nombreUsuario + " no consume suficientes frutas y verduras.");
    puntajeSalud -= 2;
  } else if (!isNaN(consumoFrutas)) {
    console.log(nombreUsuario + " consume suficientes frutas y verduras.");
    puntajeSalud += 2;
  }

  alert("Muchas gracias por responder esta encuesta, " + nombreUsuario);

  // Clasificación final según puntaje
  if (puntajeSalud >= 8) {
    console.log(
      "¡Estás en muy buen estado de salud! Seguí así " + nombreUsuario
    );
    personasSanas.push(nombreUsuario);
  } else if (puntajeSalud >= 4) {
    console.log(
      "Vas bien, pero podés mejorar aún más tus hábitos " + nombreUsuario
    );
    personasMedias.push(nombreUsuario);
  } else {
    console.log(
      "Deberías prestar más atención a tus hábitos, no son muy sanos... " +
        nombreUsuario
    );
    personasNoSanas.push(nombreUsuario);
  }

  // Mostrar resumen total al final
  console.log("----- RESULTADO FINAL DE LA ENCUESTA -----");
  console.log(
    "Personas sanas (" + personasSanas.length + "): " + personasSanas.join(", ")
  );
  console.log(
    "Personas medio sanas (" +
      personasMedias.length +
      "): " +
      personasMedias.join(", ")
  );
  console.log(
    "Personas no sanas (" +
      personasNoSanas.length +
      "): " +
      personasNoSanas.join(", ")
  );

  let total =
    personasSanas.length + personasMedias.length + personasNoSanas.length;

  if (total > 0) {
    console.log("----- PORCENTAJES -----");
    console.log(
      "Personas sanas: " +
        ((personasSanas.length / total) * 100).toFixed(2) +
        "%"
    );
    console.log(
      "Personas medio sanas: " +
        ((personasMedias.length / total) * 100).toFixed(2) +
        "%"
    );
    console.log(
      "Personas no sanas: " +
        ((personasNoSanas.length / total) * 100).toFixed(2) +
        "%"
    );
  } else {
    console.log("No se ingresaron datos para calcular porcentajes");
  }
}
