var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: What is the purpose of this function? 
// The purpose of this function is to render the list itmes that will
// inevitably display the todo items and buttons for marking them complete

function renderTodos() {
    // TODO: Describe the functionality of the following two lines of code.
    // Resets the innerHTML ot the toto-list item
    todoList.innerHTML = "";
    // Sets the todo-count item value to the length of the todos array
    todoCountSpan.textContent = todos.length;

    // TODO: Describe the functionality of the following `for` loop.
    // Loop through the todos array, set the value of each to the variable todo
    // and creat a list itme containing that value, then append an html button 
    // to the end of the list item
    for (var i = 0; i < todos.length; i++) {
        var todo = todos[i];

        var li = document.createElement("li");
        li.textContent = todo;
        li.setAttribute("data-index", i);

        var button = document.createElement("button");
        button.textContent = "Complete ✔️";

        li.appendChild(button);
        todoList.appendChild(li);
    }
}

// TODO: What is the purpose of the following function?
// Pull the itme names todos from localstorage, parse it, and assuming the
// value is not empty, save it the the variable storedTodos and execute the  
// renderTodos function.  Essentially providing a method for displaying any
// todos saved
function init() {

    // TODO: What is the purpose of the following line of code?
    //parse any items stored in local storage save as a JSON array    
    var storedTodos = JSON.parse(localStorage.getItem("todos"));
    // TODO: Describe the functionality of the following `if` statement.
    // checks if whether the storedTodos variable is set and then save that
    // value to the todo variable
    if (storedTodos !== null) {
        todos = storedTodos;
    }
    // TODO: Describe the purpose of the following line of code.
    renderTodos(); // execute the renderTodos function
}

function storeTodos() {
    // TODO: Describe the purpose of the following line of code.
    // save the value of the todos variable to a JSON array and save it to 
    // localstorage
    localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
// Adds an even listener to the submit button which keeps the page from getting
//, makes sure the todoText variable is not empty, then pushes the value of the
// todoText variale to the and of the todos array and clears the text input
todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var todoText = todoInput.value.trim();
    // TODO: Describe the functionality of the following `if` statement.
    // checks of the todoText variable is empty and exits the function with no 
    // return valus if it is
    if (todoText === "") {
        return;
    }
    // TODO: Describe the purpose of the following lines of code.
    // push the value fo the todoText variable to the end of the todos array
    // the clears any text int he text input
    todos.push(todoText);
    todoInput.value = "";

    // TODO: What will happen when the following functions are called?
    storeTodos(); // stores the todos to local storage
    renderTodos(); // renders the page based on saved todos
});

// TODO: Describe the purpose of the following line of code.
// creates a click event listener
todoList.addEventListener("click", function (event) {
    var element = event.target;
    // TODO: Describe the functionality of the following `if` statement.
    // if the clicked element is a button, set the data- attribute value to
    // the index variable to the specific todos array value matching the 
    // data-index value 
    if (element.matches("button") === true) {
        var index = element.parentElement.getAttribute("data-index");
        todos.splice(index, 1);
        // TODO: What will happen when the following functions are called?
        storeTodos(); // stores the todos to local storage
        renderTodos(); // renders the page based on saved todos
    }
});

init();
