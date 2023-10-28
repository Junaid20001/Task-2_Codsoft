const list = document.getElementById("list");
const todoItem = document.getElementById("todo_item");
const addButton = document.getElementById("add");
const deleteAllButton = document.getElementById("deleteAll");
addButton.addEventListener("click", addItem);
deleteAllButton.addEventListener("click", deleteAll);
list.addEventListener("click", handleListClick);
function addItem() {
const itemText = todoItem.value.trim();
    if (itemText !== "") {
        const li = createListItem(itemText);
        list.appendChild(li);
        todoItem.value = "";
    }
}

function deleteAll() {
    list.innerHTML = "";
}

function handleListClick(e) {
    const target = e.target;
    if (target.classList.contains("action-button") && !target.classList.contains("delete-button")) {
        editItem(target);
    } else if (target.classList.contains("delete-button")) {
        deleteItem(target);
    }
}

function createListItem(itemText) {
    const li = document.createElement("li");
    li.className = "lis";
    li.textContent = itemText;
    li.appendChild(createActionButton("Edit", "action-button"));
    li.appendChild(createActionButton("Delete", "action-button delete-button"));
    return li;
}

function createActionButton(text, className) {
    const button = document.createElement("button");
    button.textContent = text;
    button.className = className;
    return button;
}

function editItem(target) {
    const newText = prompt("Edit Item", target.parentNode.firstChild.nodeValue);
    if (newText !== null) {
        target.parentNode.firstChild.nodeValue = newText;
    }
}

function deleteItem(target) {
    target.parentNode.remove();
}