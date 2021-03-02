function createTask() {

    const form = document.forms[0];
    const task = form["task"].value;
    const selectWeek = form["dias-semana"].value;
    const divWeek = document.getElementById(`${selectWeek}`);
    divWeek.innerHTML += "<p class=" + "p" + ">" + task + "</p>";

    const p = document.getElementsByClassName('p');

    for (let element of p) {
        element.addEventListener('click', (event) => {
            element.style.textDecoration = "line-through";
        });
    }
}

button.addEventListener('click', (event) => {
    event.preventDefault();

    createTask();

});