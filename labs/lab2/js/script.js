
let inventory = [];

// Add item to inventory and update DOM
function addItem() {
    const name = document.getElementById("item-name").value.trim();
    const type = document.getElementById("item-type").value.trim();
    const price = parseFloat(document.getElementById("price").value);
    const quantity = parseInt(document.getElementById("quantity").value);
    const description = document.getElementById("description").value.trim();

    if (!name || !type || isNaN(price) || isNaN(quantity) || !description || price < 0 || quantity < 0) {
        alert("Please enter valid item details.");
        return;
    }

    const item = { name, type, price, quantity, description };
    inventory.push(item);
    listInventory();
}

// Remove item by name and update DOM
function removeItem(itemName) {
    const index = inventory.findIndex(item => item.name === itemName);
    if (index > -1) {
        inventory.splice(index, 1);
        listInventory();
    } else {
        alert("Item not found in inventory: " + itemName);
    }
}

// Get item by name
function getItem(itemName) {
    return inventory.find(item => item.name === itemName);
}

// List all items in inventory and update DOM
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

// Search items by name or type and update DOM
function searchItems(query) {
    query = query.trim().toLowerCase();
    const results = inventory.filter(item => item.name.toLowerCase().includes(query) || item.type.toLowerCase().includes(query));
    listInventory(results);
}

// Calculate total value and update DOM
function calculateTotalValue() {
    const total = inventory.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const display = document.getElementById("total-value-display");
    if (display) display.textContent = `Total Inventory Value: $${total.toFixed(2)}`;
}

// Find duplicates by name
function findDuplicates() {
    const names = inventory.map(item => item.name);
    const duplicates = names.filter((name, index) => names.indexOf(name) !== index);
    return [...new Set(duplicates)];
}

// Apply discount to all items
function applyDiscount(discountPercent) {
    inventory.forEach(item => {
        item.price = parseFloat((item.price * (1 - discountPercent / 100)).toFixed(2));
    });
    listInventory();
}

// Event listeners for forms and buttons
document.addEventListener("DOMContentLoaded", function() {
    // Add item form
    const addForm = document.getElementById("add-item-form");
    if (addForm) {
        addForm.addEventListener("submit", function(e) {
            e.preventDefault();
            addItem();
            addForm.reset();
        });
    }

    // Remove item form
    const removeForm = document.getElementById("remove-item-form");
    if (removeForm) {
        removeForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const name = document.getElementById("remove-item").value.trim();
            if (name) removeItem(name);
            removeForm.reset();
        });
    }

    // Search item form
    const searchForm = document.getElementById("search-item-form");
    if (searchForm) {
        searchForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const query = document.getElementById("search-query").value;
            searchItems(query);
        });
    }

    // Show all items button
    const showAllBtn = document.getElementById("show-all-items");
    if (showAllBtn) {
        showAllBtn.addEventListener("click", function() {
            listInventory();
        });
    }

    // Calculate total value button
    const totalBtn = document.getElementById("calculate-total-value");
    if (totalBtn) {
        totalBtn.addEventListener("click", function() {
            calculateTotalValue();
        });
    }
});
