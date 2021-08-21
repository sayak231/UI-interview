const main = () => {
  let mainTodoList = [],
    idCounter = 0;

  if (localStorage.getItem("mainTodoList")) {
    let storedTodo = localStorage.getItem("mainTodoList");
    mainTodoList = JSON.parse(storedTodo);
  }

  const addTodoButton = document.getElementById("add-todo-button");
  const addTodoInput = document.getElementById("add-todo-input");
  const todoList = document.getElementById("todo-list");

  const renderSingleTodo = (id, name) => {
    return `<div class="todo-container" id="todo-container-${id}">
        <span id="name-${id}">${name}</span>
        <div class="button-container">
          <button id="edit-${id}" class="buttons">Edit</button>
          <button id="delete-${id}" class="buttons">Delete</button>
        </div>
      </div>`;
  };

  const renderTodos = () => {
    let list = "";
    mainTodoList.forEach(({ id, name }) => {
      list += renderSingleTodo(id, name);
    });
    todoList.innerHTML = list;
  };

  const addTodo = () => {
    const todoName = addTodoInput.value;
    mainTodoList.push({ id: idCounter, name: todoName });
    idCounter++;
    addTodoInput.value = "";
    localStorage.setItem("mainTodoList", JSON.stringify(mainTodoList));
    renderTodos();
  };

  const editDeleteTodo = (e) => {
    if (e.target.nodeName.toLowerCase() === "button") {
      const element = e.target.id.split("-");
      const [operation, elementId] = element;
      if (operation === "delete") {
        mainTodoList = mainTodoList.filter(({ id }) => id != elementId);
        localStorage.setItem("mainTodoList", JSON.stringify(mainTodoList));
        renderTodos();
      }
      if (operation === "edit") {
        document.getElementById(`name-${elementId}`).contentEditable = true;
        document.getElementById(e.target.id).id = "save-" + elementId;
        document.getElementById(e.target.id).innerHTML = "Save";
      }
      if (operation === "save") {
        document.getElementById(`name-${elementId}`).contentEditable = false;
        const editedValue = document.getElementById(
          `name-${elementId}`
        ).innerHTML;
        mainTodoList.forEach(({ id }, index) => {
          if (id == elementId) {
            mainTodoList[index].name = editedValue;
          }
        });
        localStorage.setItem("mainTodoList", JSON.stringify(mainTodoList));
        document.getElementById(e.target.id).id = "edit-" + elementId;
        document.getElementById(e.target.id).innerHTML = "Edit";
        renderTodos();
      }
    }
  };

  addTodoButton.addEventListener("click", addTodo);
  todoList.addEventListener("click", editDeleteTodo);
  addTodoInput.addEventListener("keyup", () => {
    if (addTodoInput.value === "") addTodoButton.disabled = true;
    else addTodoButton.disabled = false;
  });

  renderTodos();
};
main();
