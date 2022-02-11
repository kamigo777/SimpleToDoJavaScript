var addTodo = document.getElementById('addTodo');
var todoInput = document.getElementById('addInput');
var todoList = document.getElementById('todolist');

addTodo.addEventListener("click", function(){
    var todoText = todoInput.value;
    todoInput.value = "";

    var todo = document.createElement("DIV");
    todo.classList.add("todo");
    todo.innerHTML = todoText;

    var removeBTN = document.createElement("BUTTON");
    removeBTN.classList.add("remove-btn");
    removeBTN.innerHTML = "REMOVE";
    removeBTN.addEventListener("click", function(){
        todo.parentNode.removeChild(todo);
    });
    todo.append(removeBTN);
    todoList.append(todo);
});