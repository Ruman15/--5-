function addListItem() {
    var ul = document.getElementById('myList');
    
    var li = document.createElement('li');
    
    li.className = 'list-item';
    
    li.textContent = 'Новый элемент';
    
    ul.appendChild(li);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('addEndButton').addEventListener('click', addListItemToEnd);
    document.getElementById('addStartButton').addEventListener('click', addListItemToStart);
    document.getElementById('removeLastButton').addEventListener('click', removeLastListItem);
    document.getElementById('removeFirstButton').addEventListener('click', removeFirstListItem);
    document.getElementById('selfDestructButton').addEventListener('click', selfDestruct);
});

function addListItemToEnd() {
    var ul = document.getElementById('myList');
    var li = document.createElement('li');
    li.className = 'list-item';
    li.textContent = 'Новый элемент';
    ul.appendChild(li);
}

function addListItemToStart() {
    var ul = document.getElementById('myList');
    var li = document.createElement('li');
    li.className = 'list-item';
    li.textContent = 'Новый элемент';
    ul.insertBefore(li, ul.firstChild);
}

function removeLastListItem() {
    var ul = document.getElementById('myList');
    if (ul.lastChild) {
        ul.removeChild(ul.lastChild);
    }
}

function removeFirstListItem() {
    var ul = document.getElementById('myList');
    if (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
}

function selfDestruct() {
    var body = document.body;
    body.innerHTML = '';
    body.classList.add('blackout');
}

