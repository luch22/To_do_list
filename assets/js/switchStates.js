export function switchStates(listToDo) {
  document.querySelectorAll("input[name=checkbox]").forEach((e) => {
    let deleteToDo = e.parentElement.querySelector(".toDo__delete");

    e.addEventListener("change", function () {
      if (this.checked) {
        console.log("c'est Bon");
        deleteToDo.style.visibility = "visible";
      } else {
        console.log("c'est mauvais");
        deleteToDo.style.visibility = "hidden";
      }
      listToDo.forEach((myToDo) => {
        if (
          myToDo.accomplished != this.checked &&
          myToDo.title == this.parentElement.firstChild.textContent
        ) {
          myToDo.accomplished = e.checked;
        }
      });
      let n = localStorage.getItem("index");
      localStorage.clear();
      listToDo.forEach((e) => {
        window.localStorage.setItem(e.index, JSON.stringify(e));
        window.localStorage.setItem("index", n);
      });
    });
  });
}
