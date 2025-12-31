function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") return;

    // create li
    let li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button onclick="finishTask(this)">✔</button>
            <button onclick="deleteTask(this)">✖</button>
        </div>
    `;

    document.getElementById("pendingList").appendChild(li);
    input.value = "";
}

function finishTask(btn) {
    let li = btn.parentElement.parentElement;
    li.classList.add("completed");

    // remove buttons after finished
    li.querySelector("div").remove();

    document.getElementById("finishedList").appendChild(li);
}

function deleteTask(btn) {
    let li = btn.parentElement.parentElement;
    li.remove();
}
