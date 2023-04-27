import { displayHTML } from "./displayHTML.js";
import { updateLocalStorage } from "./saveDataStorage.js";

export function delToDo(listToDo) {
  document.querySelectorAll(".toDo__delete").forEach((element) => {
    element.addEventListener("click", (e) => {
      console.log(e.target.parentElement.parentElement.dataset.id);
      listToDo.forEach((myToDo) => {
        if (myToDo.index == e.target.parentElement.parentElement.dataset.id) {
          console.log(myToDo);

          listToDo.splice(listToDo.indexOf(myToDo), 1);
          updateLocalStorage(listToDo);
          displayHTML(listToDo);
        }
      });
    });
  });
}
