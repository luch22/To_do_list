export function addToDo(myListToDo, index) {
  let myToDo = myListToDo;
  document.getElementById("toDo__add").addEventListener("click", () => {
    if (document.getElementById("titre").value != "") {
      myToDo.push({
        index: index + 1,
        title: document.getElementById("titre").value,
        date: document.getElementById("date").value,
        text: document.getElementById("toDo").value,
        accomplished: false,
        active: true,
      });
      console.log(localStorage);
      localStorage.clear();
      myToDo.forEach((e) => {
        window.localStorage.setItem(e.index, JSON.stringify(e));
      });
    }
    location.reload();
  });

  return myToDo;
}
