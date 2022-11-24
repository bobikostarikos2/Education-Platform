let id_count = 0;

function createObject(input){
  console.log(input.value);

  let todo = {
    id : '',
    value : '',
    isCompleted : false,
  }

  todo.id = 'todo-' + id_count;
  id_count++;

  todo.value = input.value;

  addTodoItem(todo);
};

function addTodoItem(obj){
  const list = document.querySelector('#todo-list');
  const itemHtml = `
    <li class="todo__item" id="${obj.id}">
      <p class="todo__text">${obj.value}</p>
    </li>
  `;
  list.innerHTML += itemHtml;
};