

let btn = document.querySelector("#btn")
let input = document.querySelector("#inp")
let tasks = document.querySelector(".task")
btn.addEventListener("click", function () {
    
    let h3 = document.createElement("h3");
    

    h3.textContent = input.value;

    tasks.appendChild(h3);

});