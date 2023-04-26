//reçois une liste de TODO a afficher dans le HTML
export function displayHTML(listToDo) {
  // mise en forme de la liste par rapport à l'index
  listToDo.sort((a, b) => a.index - b.index);
  const htmlMain = document.querySelector("main");
  let divParentToDo = document.createElement("div");
  divParentToDo.classList = "div__Principale_ToDo";
  listToDo.forEach((toDo) => {
    if (toDo.active) {
      //création de la section pour chaque ToDo
      let sectionToDo = document.createElement("section");
      sectionToDo.classList = "toDo";
      //ajout du titre
      sectionToDo.innerHTML = `<h4 class ="toDo__title">${toDo.title}</h4> <span class="toDo__text">${toDo.text}</span><input type="date" class="toDo__date" value="${toDo.date}">`;
      let checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBox.id = "accomplish";
      checkBox.checked = toDo.accomplished;
      let deleteToDo = document.createElement("div");
      deleteToDo.classList = "toDo__delete";
      sectionToDo.append(deleteToDo);
      if (!toDo.accomplished) {
        deleteToDo.style.visibility = "hidden";
      }
      sectionToDo.append(checkBox);
      divParentToDo.append(sectionToDo);
    }
  });
  htmlMain.append(divParentToDo);
}
