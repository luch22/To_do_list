export function delToDo(listToDo) {
  document.querySelectorAll(".toDo__delete").forEach((element) => {
    element.addEventListener("click", (e) => {
      listToDo.forEach((myToDo) => {
        if (myToDo.title == e.target.parentElement.firstChild.textContent) {
          console.log(listToDo.indexOf(myToDo));
          console.log(listToDo);
          listToDo.splice(listToDo.indexOf(myToDo), 1);
          console.log(listToDo);
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
