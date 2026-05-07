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


