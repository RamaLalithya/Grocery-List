// script.js
let groceryList = [];

function addItem() {
    const itemInput = document.getElementById("item");
    const categorySelect = document.getElementById("category");
    
    const item = itemInput.value.trim();
    const category = categorySelect.value;
    
    if (item) {
        // Add item to grocery list
        groceryList.push({ item, category, checked: false });
        itemInput.value = ''; // Clear input field
        renderList();
    }
}

function renderList() {
    const listContainer = document.getElementById("grocery-list").getElementsByTagName('tbody')[0];
    listContainer.innerHTML = '';

    groceryList.forEach((grocery, index) => {
        const row = document.createElement("tr");

        // Category cell
        const categoryCell = document.createElement("td");
        categoryCell.textContent = grocery.category;
        row.appendChild(categoryCell);

        // Item cell
        const itemCell = document.createElement("td");
        itemCell.textContent = grocery.item;
        row.appendChild(itemCell);

        // Actions cell
        const actionsCell = document.createElement("td");

        // Check button
        const checkButton = document.createElement("button");
        checkButton.textContent = grocery.checked ? "Uncheck" : "Check";
        checkButton.classList.add('check');
        checkButton.onclick = () => toggleCheck(index);

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add('delete');
        deleteButton.onclick = () => deleteItem(index);

        actionsCell.appendChild(checkButton);
        actionsCell.appendChild(deleteButton);

        row.appendChild(actionsCell);

        // Mark checked items with a line-through style
        if (grocery.checked) {
            row.style.textDecoration = "line-through";
            row.style.backgroundColor = "#d3f8d3";
        }

        listContainer.appendChild(row);
    });
}

function toggleCheck(index) {
    groceryList[index].checked = !groceryList[index].checked;
    renderList();
}

function deleteItem(index) {
    groceryList.splice(index, 1);
    renderList();
}