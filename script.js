const input = document.querySelector(".input-text");
const addIcon = document.querySelector(".plus-icon");
const paragraphContainer = document.querySelector(".paragraf-container");
const checkeItem = document.querySelector(".check-item");
const content = document.querySelector(".to-do-text");
const position = document.querySelector(".position");

// Am incarcat container-ul cu ce avem deja salvat in local-storage sub key-ul 'data'
window.addEventListener("load", () => {
  const storedTodoItemsText = localStorage.getItem("data");
  if (storedTodoItemsText) {
    paragraphContainer.innerHTML = storedTodoItemsText;
  }
  attachDeleteListeners();
});

// Actiunea de adaugare a unui 'todo item' pe event 'click'
addIcon.addEventListener("click", () => {
  if (!input.value.trim()) return; // Verificare ca input sa nu fie gol
  addTodoItem(input.value);
  input.value = "";
});

// Actiunea de adaugare a unui 'todo item' pe event 'keypress'
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && input.value.trim()) {
    addTodoItem(input.value);
    input.value = "";
  }
});

// Actiunea pentru a adauga un todo item pe ecran si in local storage
const addTodoItem = (text) => {
  const div = document.createElement("div");
  const paragraph = document.createElement("p");
  const icon = document.createElement("i");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  paragraph.textContent = text;
  paragraph.classList.add("paragraf-style");
  icon.classList.add("fas", "fa-trash", "icon", "icon2");
  div.classList.add("position");
  checkbox.classList.add("check-item");

  div.appendChild(paragraph);
  div.appendChild(icon);
  div.appendChild(checkbox);
  paragraphContainer.appendChild(div);

  // Salvarea in local storage
  updateTodosToLocalStorage();
  // Adaugarea evenimentului de stergere
  attachDeleteListener(icon);

  atachChecked(checkbox);
};

// Am adaugat click event pe toate 'icons' deja existente
const attachDeleteListeners = () => {
  const icons = document.querySelectorAll(".icon2");
  const allChecboxes = document.querySelectorAll(".check-item");
  icons.forEach((icon) => {
    attachDeleteListener(icon);
  });

  allChecboxes.forEach((checkbox) => {
    atachChecked(checkbox);
  });
};

// Click event individual pentru icon - stergere si update la local storage
const attachDeleteListener = (icon) => {
  icon.addEventListener("click", (e) => {
    e.target.parentElement.remove();
    updateTodosToLocalStorage();
  });
};

// Checkbox after its checked
const atachChecked = (checkbox) => {
  checkbox.addEventListener("click", (e) => {
    console.log("checked", e);
    position.classList.add("checked");
    console.log("after");
  });
};

// Salvam tot innerHTML din paragraphContainer in localstorage
const updateTodosToLocalStorage = () => {
  localStorage.setItem("data", paragraphContainer.innerHTML);
};
