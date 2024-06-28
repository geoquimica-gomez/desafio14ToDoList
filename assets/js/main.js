const tbody = document.querySelector("tbody");
const btn = document.querySelector("button");
const input = document.querySelector("input");

const tasks = [
    { id: 1, nameTask: "Hacer cena de Alondra" },
    { id: 2, nameTask: "Comprar comida a Thor" },
    { id: 3, nameTask: "Hacer mercado del mes" }
];

function renderTasks(tasks) {
    tbody.innerHTML = "";
    tasks.forEach((task) => {
        tbody.innerHTML += `
            <tr>
                <td>${task.id}</td>
                <td>${task.nameTask}</td>
                <td><input type="checkbox"></td>
                <td><button class="delete-btn">Eliminar</button></td>
            </tr>
        `;
    });
}

renderTasks(tasks);

btn.addEventListener("click", () => {
    const newTask = input.value;
    if (newTask) {
        const newTaskObj = {
            id: tasks.length + 1,
            nameTask: newTask
        };
        tasks.push(newTaskObj);
        input.value = "";
        renderTasks(tasks);
    }
});
