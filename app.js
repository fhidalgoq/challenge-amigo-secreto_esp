// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

function agregarAmigo() {
  let input = document.getElementById("amigo").value;
  if (input != "") {
    nombres.push(input);
    input.value = "";
    actualizarLista();
  } else {
    alert("Ingrese un nombre!");
  }
}

function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < nombres.length; i++) {
    let li = document.createElement("li");
    li.textContent = nombres[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (nombres.length > 1) {
    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    document.getElementById("resultado").textContent =
      "El amigo secreto es: " + nombres[indiceAleatorio];
  } else {
    document.getElementById("resultado").textContent =
      "Agrega más participantes para el sorteo.";
  }
}
