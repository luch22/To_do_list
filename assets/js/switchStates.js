export function switchStates() {
  document.querySelectorAll("input[name=checkbox]").forEach((e) => {
    let deleteToDo = e.parentElement.querySelector(".toDo__delete");
    e.addEventListener("change", function () {
      if (this.checked) {
        deleteToDo.style.visibility = "visible";
      } else {
        deleteToDo.style.visibility = "hidden";
      }
    });
  });
}
