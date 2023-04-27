export function updateLocalStorage(listToDo) {
  let index = localStorage.getItem("index");
  localStorage.clear();
  listToDo.forEach((e) => {
    window.localStorage.setItem(e.index, JSON.stringify(e));
    window.localStorage.setItem("index", index);
  });
}
