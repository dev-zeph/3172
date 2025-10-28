
let inventory = [];


function addItem() {
    const name = document.getElementById("item-name").value.trim();
    const type = document.getElementById("item-type").value.trim();
    const price = parseFloat(document.getElementById("price").value);
    const quantity = parseInt(document.getElementById("quantity").value);
    const description = document.getElementById("description").value.trim();


    const item = { name, type, price, quantity, description };
    inventory.push(item);
    listInventory();
}


function removeItem(itemName) {
    const index = inventory.findIndex(item => item.name === itemName);
    if (index > -1) {
        inventory.splice(index, 1);
        listInventory();
    } else {
        alert("Item not found in inventory: " + itemName);
    }
}


function getItem(itemName) {
    return inventory.find(item => item.name === itemName);
}


function listInventory(items = inventory) {
    const container = document.getElementById("inventory-list");
    if (!container) return;
    if (items.length === 0) {
        container.innerHTML = "<p>No items in inventory.</p>";
        return;
    }
    let html = "<ul>";
    items.forEach(item => {
        html += `<li><strong>${item.name}</strong> (${item.type}) - $${item.price} x ${item.quantity}<br>${item.description}</li>`;
    });
    html += "</ul>";
    container.innerHTML = html;
}


function searchItems(query) {
    query = query.trim().toLowerCase();
    const results = inventory.filter(item => item.name.toLowerCase().includes(query) || item.type.toLowerCase().includes(query));
    listInventory(results);
}


function calculateTotalValue() {
    const total = inventory.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const display = document.getElementById("total-value-display");
    if (display) display.textContent = `Total Inventory Value: $${total.toFixed(2)}`;
}


function findDuplicates() {
    const names = inventory.map(item => item.name);
    const duplicates = names.filter((name, index) => names.indexOf(name) !== index);
    return [...new Set(duplicates)];
}


function applyDiscount(discountPercent) {
    inventory.forEach(item => {
        item.price = parseFloat((item.price * (1 - discountPercent / 100)).toFixed(2));
    });
    listInventory();
}


document.addEventListener("DOMContentLoaded", function() {
    
    const addForm = document.getElementById("add-item-form");
    if (addForm) {
        addForm.addEventListener("submit", function(e) {
            e.preventDefault();
            addItem();
            addForm.reset();
        });
    }


    const removeForm = document.getElementById("remove-item-form");
    if (removeForm) {
        removeForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const name = document.getElementById("remove-item").value.trim();
            if (name) removeItem(name);
            removeForm.reset();
        });
    }

  
    const searchForm = document.getElementById("search-item-form");
    if (searchForm) {
        searchForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const query = document.getElementById("search-query").value;
            searchItems(query);
        });
    }

  
    const showAllBtn = document.getElementById("show-all-items");
    if (showAllBtn) {
        showAllBtn.addEventListener("click", function() {
            listInventory();
        });
    }

    const totalBtn = document.getElementById("calculate-total-value");
    if (totalBtn) {
        totalBtn.addEventListener("click", function() {
            calculateTotalValue();
        });
    }
});
