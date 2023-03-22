"use strict";

function isHead() {
  let v = Boolean(Math.round(Math.random()));
  let output = v ? "Kopf" : "Zahl";
  let flipRes = document.getElementById('flipRes');
  flipRes.innerText = output;
  console.log(output);
}
