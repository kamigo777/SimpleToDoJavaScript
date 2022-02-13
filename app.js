var addTodo = document.getElementById('addTodo');/*создаем переменную добавитьтодо по айдишнику присваиваем*/
var todoInput = document.getElementById('addInput');/* по айдишнику присваиваем инпут к переменной тодоинпут*/
var todoList = document.getElementById('todolist');/*по айдишнику присваиваем список к переменной тодосписок*/

addTodo.addEventListener("click", function(){/* создаем функциию добавитьтодо, которая выполняется по клику*/
    var todoText = todoInput.value;/* передаем значение переменной тодоинпут в переменную тодотекст*/
    todoInput.value = "";/*после чего очищаем поле инпута*/

    var todo = document.createElement("DIV");/*переменной тодо присваиваем сосздание дива*/
    todo.classList.add("todo");/*добавляем новое тодо*/
    todo.innerHTML = todoText;/*присваиваем ему тодотекст-значение с инпута*/

    var removeBTN = document.createElement("BUTTON");/*создаем кнопку и присваиваем переменной удалить кнопка*/
    removeBTN.classList.add("remove-btn");/*кнопка-удалить получает клас удалить*/
    removeBTN.innerHTML = "REMOVE";/*вномим изменения в документ*/
    removeBTN.addEventListener("click", function(){/*по клику заменяем ноду на ее ребенка*/
        todo.parentNode.removeChild(todo);/**/
    });
    todo.append(removeBTN);/**/
    todoList.append(todo);/**/
});