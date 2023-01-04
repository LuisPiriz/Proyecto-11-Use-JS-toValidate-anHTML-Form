/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  // 1.obtener elemento
  let form = document.querySelector("form");

  // manipular el elemento
  form.addEventListener("submit", enviarDatos);

  function enviarDatos(e) {
    e.preventDefault();

    let tarjeta = document.getElementById("tarjeta");
    let cvc = document.getElementById("cvc");
    let amount = document.getElementById("amount");
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let city = document.getElementById("city");
    let state = document.getElementById("state");
    let pcode = document.getElementById("pcode");
    let chb1 = document.getElementById("chb1");
    let chb2 = document.getElementById("chb2");
    let chb3 = document.getElementById("chb3");
    let chb4 = document.getElementById("chb4");
    let message = document.getElementById("message");
    // console.log(tarjeta.value);
    // console.log(cvc.value);

    let alert = document.getElementById("alerta");
    // let inputs = document.querySelector("input");

    if (tarjeta.value === "") {
      alert.style.display = "";
      tarjeta.style.backgroundColor = "lightcoral";
    } else {
      alert.style.display = "none";
      tarjeta.style.backgroundColor = "white";
    }
    if (cvc.value === "") {
      alert.style.display = "";
      cvc.style.backgroundColor = "lightcoral";
    } else {
      alert.style.display = "none";
      cvc.style.backgroundColor = "white";
    }
    if (amount.value === "") {
      alert.style.display = "";
      amount.style.backgroundColor = "lightcoral";
    } else {
      alert.style.display = "none";
      amount.style.backgroundColor = "white";
    }
    if (nombre.value === "") {
      alert.style.display = "";
      nombre.style.backgroundColor = "lightcoral";
    } else {
      alert.style.display = "none";
      nombre.style.backgroundColor = "white";
    }
    if (apellido.value === "") {
      alert.style.display = "";
      apellido.style.backgroundColor = "lightcoral";
    } else {
      alert.style.display = "none";
      apellido.style.backgroundColor = "white";
    }
    if (city.value === "") {
      alert.style.display = "";
      city.style.backgroundColor = "lightcoral";
    } else {
      alert.style.display = "none";
      city.style.backgroundColor = "white";
    }
    if (state.value === "Pick a State") {
      alert.style.display = "";
      state.style.backgroundColor = "lightcoral";
    } else {
      alert.style.display = "none";
      state.style.backgroundColor = "white";
    }
    if (pcode.value === "") {
      alert.style.display = "";
      pcode.style.backgroundColor = "lightcoral";
    } else {
      alert.style.display = "none";
      pcode.style.backgroundColor = "white";
    }
    if (chb1.value === "") {
      alert.style.display = "";
    } else {
      alert.style.display = "none";
    }
    if (chb2.value === "") {
      alert.style.display = "";
    } else {
      alert.style.display = "none";
    }
    if (chb3.value === "") {
      alert.style.display = "";
    } else {
      alert.style.display = "none";
    }
    if (chb4.value === "") {
      alert.style.display = "";
    } else {
      alert.style.display = "none";
    }
    if (message.value === "") {
      alert.style.display = "";
      message.style.backgroundColor = "lightcoral";
    } else {
      alert.style.display = "none";
      message.style.backgroundColor = "white";
    }
  }
};
