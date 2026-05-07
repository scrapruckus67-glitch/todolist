<<<<<<< HEAD
document.addEventListener('DOMContentLoaded',()=>{
    const taskinput = document.querySelector(".inputarea")
    const addtaskbtn = document.querySelector("#addtask")
    const tasklist = document.querySelector(".task-list")

    const addtask = (event) => {
        event.preventDefault();
        const tasktext = taskinput.value;
        if(!tasktext) {
            return;
        }

        const li = document.createElement('li')
        li.innerHTML = `<input type="checkbox" class="checkbox">
            <span>${tasktext}</span>;`
        tasklist.appendChild(li);
        taskinput.value = ''
    }

    addtaskbtn.addEventListener('click',addtask);
    taskinput.addEventListener('keypress',(e) => {
        if(e.key === 'Enter') {
            addtask(e)
        }
    })
} )


=======


let btn = document.querySelector("#btn")
let input = document.querySelector("#inp")
let tasks = document.querySelector(".task")
btn.addEventListener("click", function () {
    
    let h3 = document.createElement("h3");
    

    h3.textContent = input.value;

    tasks.appendChild(h3);

});
>>>>>>> 80d6aa9d164db112d3b7c6f0912f87970ec8cc7b
