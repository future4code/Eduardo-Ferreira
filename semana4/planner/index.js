function createTask() {

    const form = document.forms[0];
    const task = form["task"].value;
    const selectWeek = form["dias-semana"].value;
    const divWeek = document.getElementById(`${selectWeek}`);
    const p = document.getElementsByClassName('p');

    if (task == "") {
        alert("Não é possível cadastrar uma tarefa em branco!");
        return false;
    } else {
        divWeek.innerHTML += "<p class=" + "p" + ">" + task + "</p>";
        for (let element of p) {
            element.addEventListener('click', (event) => {
                element.style.textDecoration = "line-through";
            });
        }
    }
}

const create = document.getElementById('create');
const clear = document.getElementById('clear');

create.addEventListener('click', (event) => {
    event.preventDefault();
    
    createTask();

});

clear.addEventListener('click', (event) => {
    event.preventDefault();

    const listTasks = document.querySelectorAll('div.list-task');
    let i = 0;
    while(i < listTasks.length){
        listTasks[i].innerHTML = "";
        i++;
    }
});