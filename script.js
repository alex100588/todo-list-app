const input = document.querySelector(".input-text");
const addIcon = document.querySelector(".plus-icon");
// const deleteIcon = document.querySelector(".icon2");
const todoItem = document.querySelector(".position");
const paragraphContainer = document.querySelector(".paragraf-container");



addIcon.addEventListener("click", () => {
  element();
  input.value = "";
});
input.addEventListener("keypress", (e) => {
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
    const all = paragraphContainer.appendChild(div);
    localStorage.setItem('Item', JSON.stringify(all))
    console.log(localStorage);
    
};
const test = document.querySelectorAll(".icon2").forEach(i =>{
    // console.log(i);
    
    i.addEventListener('click', (e)=>{
        e.target.parentElement.remove()
        console.log(e.target);
        if(e.target === i){
            console.log(i);
            
        }
       
    })
    
})

