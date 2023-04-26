export function delToDo(listToDo) {
  document.querySelectorAll(".toDo__delete").forEach((element) => {
    element.addEventListener("click", (e) => {
      listToDo.forEach((myToDo) => {
        if (myToDo.title == e.target.parentElement.firstChild.textContent) {
          listToDo.splice(listToDo.indexOf(myToDo), 1);
          localStorage.clear();
          listToDo.forEach((e) => {
            window.localStorage.setItem(e.index, JSON.stringify(e));
          });
        }
        location.reload();
      });
    });
  });
}
