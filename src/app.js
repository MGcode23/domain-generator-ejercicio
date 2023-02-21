/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#name").innerHTML = domainName();
  });

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  function domainName() {
    let i = 0;
    let j = 0;
    let k = 0;

    let temp = "";

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          temp += pronoun[i] + adj[j] + noun[k] + ".com <br>";
        }
      }
    }
    return temp;
  }
};
