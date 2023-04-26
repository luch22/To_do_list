import { listToDo } from "./listToDo.js";
import { displayHTML } from "./displayHTML.js";

export let myListToDo = [];

listToDo.forEach((e) => {
  window.localStorage.setItem(e.index, JSON.stringify(e));
});

Object.keys(localStorage).forEach(function (key) {
  myListToDo.push(JSON.parse(localStorage.getItem(key)));
});
let index = localStorage.length + 1;
localStorage.clear();

document.getElementById("toDo__add").addEventListener("click", () => {
  myListToDo.push({
    index: index,
    title: document.getElementById("titre").value,
    date: document.getElementById("date").value,
    text: document.getElementById("toDo").value,
    accomplished: false,
    active: true,
  });
  document.querySelector(".div__Principale_ToDo").remove();  
  displayHTML(myListToDo);
  
});
