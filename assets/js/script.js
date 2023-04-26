import { displayHTML } from "./displayHTML.js";
import { addToDo } from "./addToDo.js";
import { listToDo } from "./listToDo.js";
import { delToDo } from "./delToDo.js";
import { switchStates } from "./switchStates.js";

// localStorage.clear();
if (localStorage.length == 0) {
  listToDo.forEach((e) => {
    window.localStorage.setItem(e.index, JSON.stringify(e));
  });
}

let myListToDo = [];
Object.keys(localStorage).forEach(function (key) {
  myListToDo.push(JSON.parse(localStorage.getItem(key)));
});

myListToDo = addToDo(myListToDo, myListToDo.length);

displayHTML(myListToDo);
delToDo(myListToDo);
switchStates();
