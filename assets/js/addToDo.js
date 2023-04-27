import { displayHTML } from "./displayHTML.js";
import { updateLocalStorage } from "./saveDataStorage.js";

export function addToDo(myListToDo) {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let index = localStorage.getItem("index");
    if (document.getElementById("titre").value === "") {
      return;
    }
    myListToDo.push({
      index: ++index,
      title: document.getElementById("titre").value,
      date: document.getElementById("date").value,
      text: document.getElementById("toDo").value,
      accomplished: false,
      active: true,
    });
    localStorage.setItem("index", index);
    updateLocalStorage(myListToDo);
    displayHTML(myListToDo);
  });
}
