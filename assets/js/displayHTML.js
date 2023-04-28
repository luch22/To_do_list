import { updateLocalStorage } from "./saveDataStorage.js";
//reçois une liste de TODO a afficher dans le HTML
export function displayHTML(listToDo) {
  // mise en forme de la liste par rapport à l'index
  listToDo.sort((a, b) => a.index - b.index);
  const htmlMain = document.querySelector("main");
  htmlMain.innerHTML = "";
  document.getElementById("date").valueAsDate = new Date();
  let divParentToDo = document.createElement("div");
  divParentToDo.classList = "div__Principale_ToDo";
  listToDo.forEach((toDo) => {
    if (toDo.active) {
      //création de la section pour chaque ToDo
      let sectionToDo = document.createElement("section");
      sectionToDo.classList = "toDo";
      sectionToDo.dataset.id = toDo.index;
      //ajout du titre
      sectionToDo.innerHTML = `<h4 class ="toDo__title">${toDo.title}</h4> <span class="toDo__text">${toDo.text}</span><input type="date" class="toDo__date" value="${toDo.date}">`;
      let checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBox.id = "accomplish";
      checkBox.name = "checkbox";
      checkBox.checked = toDo.accomplished;
      checkBox.textContent = "TEST";
      checkBox.addEventListener("change", function () {
        toDo.accomplished = checkBox.checked;
        updateLocalStorage(listToDo);
      });
      let deleteToDo = document.createElement("div");
      deleteToDo.classList = "container_toDo__delete";
      deleteToDo.innerHTML = "<div class='toDo__delete'></div>";
      deleteToDo.addEventListener("click", (e) => {
        console.log(e.target.parentElement.parentElement.dataset.id);
        if (e.target.parentElement.parentElement.dataset.id == toDo.index) {
          listToDo.splice(listToDo.indexOf(toDo), 1);
          updateLocalStorage(listToDo);
          displayHTML(listToDo);
        }
      });
      sectionToDo.append(checkBox);
      sectionToDo.append(deleteToDo);
      divParentToDo.append(sectionToDo);
    }
  });
  htmlMain.append(divParentToDo);
}
