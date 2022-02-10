/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.getElementById("domain").innerHTML = resultado;

  let resultado = "";
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var domin = [".com", ".org", ".co"];

  for (let i = 0; i <= pronoun.length - 1; i++) {
    for (let j = 0; j <= adj.length - 1; j++) {
      for (let k = 0; k <= noun.length - 1; k++) {
        for (let l = 0; l <= domin.length - 1; l++) {
          resultado += pronoun[i] + adj[j] + noun[k] + domin[l] + "</br>";
          console.log(resultado);
        }
      }
    }
  }

  document.getElementById("domain").innerHTML = resultado;
};
