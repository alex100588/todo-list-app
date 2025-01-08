const input = document.querySelector(".input-text");
const addIcon = document.querySelector(".plus-icon");
const deleteIcon = document.querySelector(".icon2");
const todoItem = document.querySelector(".position");
const paragraphContainer = document.querySelector(".paragraf-container");

addIcon.addEventListener("click", (e) => {
  console.log(input.value);
  element();
  input.value = "";
});
input.addEventListener("keypress", (e) => {
  console.log(e.key);
  if (e.key == "Enter") {
    element();
    input.value = "";
  }
});

const element = () => {
  const div = document.createElement("div");
  const paragraph = document.createElement("p");
  const icon = document.createElement("i");
  paragraph.textContent = input.value;
  paragraph.classList.add("paragraf-style");
  icon.classList.add("fas", "fa-trash", "icon", "icon2");
  div.classList.add("position");

  div.appendChild(paragraph, icon);
  div.appendChild(icon);
  paragraphContainer.appendChild(div);

  console.log(div);
};
