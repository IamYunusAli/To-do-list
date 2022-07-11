import { toDoListData } from './todo.js';
import resetIndex from './resetindex.js';

export function removeTask(reindex) {
  const toDoListDatas = toDoListData().filter((todo) => todo.index !== reindex);
  resetIndex(toDoListDatas);
  window.localStorage.setItem('taskData', JSON.stringify(toDoListDatas));
}

export function editTodo(reindex, todoDescription) {
  const toDoListDatas = toDoListData().map((todo) => {
    if (todo.index === reindex) {
      return { ...todo, description: todoDescription };
    }
    return todo;
  });
  window.localStorage.setItem('taskData', JSON.stringify(toDoListDatas));
}

export function completeTodo(reindex, status) {
  const selected = toDoListData().findIndex((element) => element.index === reindex);
  toDoListData()[selected].completed = status;
  localStorage.setItem('todos', JSON.stringify(selected));
}

export function clearCompletedTodos() {
  const toDoListDatas = toDoListData().filter((todo) => !todo.completed);
  resetIndex(toDoListDatas);
  window.localStorage.setItem('taskData', JSON.stringify(toDoListDatas));
}