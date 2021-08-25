const main = () => {
  let tasksContainer = {};
  let draggables, droppables;
  const statusInput = document.getElementById("add-status");

  if (localStorage.getItem("tasks-container")) {
    const getTasks = localStorage.getItem("tasks-container");
    tasksContainer = JSON.parse(getTasks);
  }

  const addStatus = () => {
    const status = statusInput.value;
    if (tasksContainer[status]) {
      document.querySelector("#message").innerHTML = "Status already present !";
    } else tasksContainer[status] = [];
    localStorage.setItem("tasks-container", JSON.stringify(tasksContainer));
    renderStatus();
  };

  const renderStatus = () => {
    let view = "";
    for (let key of Object.keys(tasksContainer)) {
      view += `<div id="status-wrapper-${key}" class="status-wrapper" draggable="true">
        <div class="status-header">${key}</div>
        <div id="tasks-container-${key}" class="droppable status-tasks-container">`;
      tasksContainer[key].forEach((task, i) => {
        view += `<div draggable="true" id="task-wrapper-${key}-${i}" class="draggable task-wrapper">${task}&emsp;<button id="delete-task-${key}-${i}">Del</button></div>`;
      });
      view += `</div>
        <input type="text" id="add-task-${key}" placeholder="Add task" />
        <button id="add-task-button-${key}">
            Add Task
        </button>
      </div>`;
    }
    document.querySelector("#container").innerHTML = view;
  };

  const setDroppablesAndDraggables = () => {
    draggables = document.querySelectorAll(".draggable");
    droppables = document.querySelectorAll(".droppable");
  };

  const addTask = (e) => {
    if (e.target.id.includes("add-task-button-")) {
      const key = e.target.id.split("-")[3];
      const task = document.getElementById(`add-task-${key}`).value;
      tasksContainer[key].push(task);
      localStorage.setItem("tasks-container", JSON.stringify(tasksContainer));
      renderStatus();
      setDroppablesAndDraggables();
      setEventListeners();
    }
  };

  const deleteTask = (e) => {
    if (e.target.id.includes("delete-task-")) {
      const key = e.target.id.split("-")[2];
      const index = e.target.id.split("-")[3];
      tasksContainer[key] = tasksContainer[key].filter((_, i) => i != index);
      localStorage.setItem("tasks-container", JSON.stringify(tasksContainer));
      console.log("tasksContainer", tasksContainer);
      renderStatus();
      setDroppablesAndDraggables();
      setEventListeners();
    }
  };

  const setEventListeners = () => {
    draggables.forEach((draggable) => {
      draggable.addEventListener("dragstart", dragStart);
      draggable.addEventListener("dragend", dragEnd);
    });

    droppables.forEach((droppable) => {
      droppable.addEventListener("dragover", dragOver);
      droppable.addEventListener("dragenter", dragEnter);
      droppable.addEventListener("dragleave", dragLeave);
      droppable.addEventListener("drop", dragDrop);
    });
  };

  let dragLeft = false,
    currentDraggable = null,
    currentDroppable;

  const dragStart = (e) => {
    // console.log("dragStart", e.target);
    currentDraggable = e.target;
  };
  const dragEnd = (e) => {
    // console.log("dragEnd", e.target);
    currentDraggable = null;
    dragLeft = false;
  };
  const dragOver = (e) => {
    e.preventDefault();
    // console.log("dragOver", e.target);
    currentDroppable = e.target;
  };
  const dragEnter = (e) => {
    // console.log("dragEnter", e.target);
    dragLeft = false;
  };
  const dragLeave = (e) => {
    console.log("dragLeave", e.target);
    if (
      e.target.id.includes("tasks-container") ||
      e.target.id.includes("delete") ||
      e.target.id.includes("task-wrapper")
    ) {
      dragLeft = false;
    } else dragLeft = true;
  };
  const dragDrop = (e) => {
    console.log(dragLeft);
    if (!dragLeft) {
      const draggable = currentDraggable.id.split("-");
      const droppable = currentDroppable.id.split("-");
      console.log(droppable);
      const fromKey = draggable[2];
      const index = parseInt(draggable[3]);
      const toKey = droppable[2];

      tasksContainer[toKey].push(tasksContainer[fromKey][index]);
      tasksContainer[fromKey] = tasksContainer[fromKey].filter(
        (_, i) => i !== index
      );

      localStorage.setItem("tasks-container", JSON.stringify(tasksContainer));
      renderStatus();
      setDroppablesAndDraggables();
      setEventListeners();
    }
  };

  document
    .getElementById("add-status-button")
    .addEventListener("click", addStatus);
  document.getElementById("container").addEventListener("click", addTask);
  document.getElementById("container").addEventListener("click", deleteTask);

  renderStatus();

  setDroppablesAndDraggables();

  setEventListeners();
};
main();
