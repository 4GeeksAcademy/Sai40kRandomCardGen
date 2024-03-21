import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const palos = ["corazon", "diamante", "pica", "trebol"];
  const valores = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let IconU = document.querySelector("#UpperIcon");
  let numero = document.querySelector("#n");
  let IconL = document.querySelector("#LowerIcon");

  function eleccionCarta(arr1, arr2) {
    let carta = [];
    carta.push(arr1[Math.floor(Math.random() * arr1.length)]);
    carta.push(arr2[Math.floor(Math.random() * arr2.length)]);
    return carta;
  }
  function asignarColor(arr) {
    if (arr[0] === "corazon" || arr[0] === "diamante") {
      IconU.style.color = "red";
      numero.style.color = "red";
      IconL.style.color = "red";
    } else {
      IconU.style.color = "black";
      numero.style.color = "black";
      IconL.style.color = "black";
    }
  }
  function asignarPalo(arr) {
    if (arr[0] === "corazon") {
      IconU.innerHTML = "♥";
      IconL.innerHTML = "♥";
    } else if (arr[0] === "diamante") {
      IconU.innerHTML = "♦";
      IconL.innerHTML = "♦";
    } else if (arr[0] === "trebol") {
      IconU.innerHTML = "♣";
      IconL.innerHTML = "♣";
    } else {
      IconU.innerHTML = "♠";
      IconL.innerHTML = "♠";
    }
  }
  function asignarValor(arr) {
    numero.innerHTML = arr[1];
  }
  function generacionCarta() {
    let carta = eleccionCarta(palos, valores);
    asignarColor(carta);
    asignarPalo(carta);
    asignarValor(carta);
  }

  window.onload = function() {
    generacionCarta();
  };
  document.querySelector(".boton").addEventListener("click", generacionCarta);
};
