
let currentEl = document.getElementById("current-el");
let currentRow = 1;

/* Creates new li element and saves stitch count and row number to list of previous rows */
function save(text) {
    let saveEl = document.getElementById('save-el');
    let item = document.createElement('li');
    let rowStr = 'Row ' + currentRow + ' : ' + text + ' stitches';
    currentRow += 1;
    currentEl.innerText = currentRow;
    item.classList.add('rows');
    
    item.innerHTML = rowStr;

    saveEl.appendChild(item);
}

/* Clears all child elements from save-el and resets row count */
function clearPrev() {
    let saveEl = document.getElementById('save-el');
    while (saveEl.lastChild) {
        saveEl.removeChild(saveEl.lastChild);
    }
    currentEl.innerText = 1;
}

/* Event listener for save button */
document.getElementById('save-btn').addEventListener('click', function() {
    let value = document.getElementById('stitch-el').value;
    if (value > 0) {
        save(value);
        document.getElementById('stitch-el').value = 0;
    }
});

/* Event listener for clear button */
document.getElementById('clear-btn').addEventListener('click', function() {
    clearPrev();
})

// Eventual goals:
// Save multiple projects at once
// Create and update local storage
// Edit button for rows?