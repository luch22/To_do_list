import { displayHTML } from "./displayHTML.js";
import { addToDo } from "./addToDo.js";
import { listToDo } from "./listToDo.js";

// localStorage.clear();
if (localStorage.length == 0) {
  listToDo.forEach((e) => {
    window.localStorage.setItem(e.index, JSON.stringify(e));
    window.localStorage.setItem("index", localStorage.length);
  });
}

let myListToDo = [];
Object.keys(localStorage).forEach(function (key) {
  if (key != "index") {
    myListToDo.push(JSON.parse(localStorage.getItem(key)));
  }
});

displayHTML(myListToDo);
addToDo(myListToDo);
// switchStates(myListToDo);
