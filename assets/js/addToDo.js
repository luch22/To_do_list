export function addToDo(myListToDo) {
  let myToDo = myListToDo;
  document.querySelector("form").addEventListener("submit", (e) => {
    // e.preventDefault();
    let n = localStorage.getItem("index");
    if (document.getElementById("titre").value != "") {
      myToDo.push({
        index: ++n,
        title: document.getElementById("titre").value,
        date: document.getElementById("date").value,
        text: document.getElementById("toDo").value,
        accomplished: false,
        active: true,
      });
      localStorage.clear();
      myToDo.forEach((e) => {
        window.localStorage.setItem(e.index, JSON.stringify(e));
        window.localStorage.setItem("index", n);
      });
    }
  });
  return myToDo;
}
