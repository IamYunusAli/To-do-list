import { toDoListData } from './todo.js';
import resetIndex from './resetindex.js';
import { setData } from './setitems.js';

export function removeTask(reindex) {
  const toDoListDatas = toDoListData().filter((todo) => todo.index !== reindex);
  resetIndex(toDoListDatas);
  setData(toDoListDatas);
}

export function editTodo(reindex, todoDescription) {
  const toDoListDatas = toDoListData().map((todo) => {
    if (todo.index === reindex) {
      return { ...todo, description: todoDescription };
    }
    return todo;
  });
  setData(toDoListDatas);
}

export function completeTodo(reindex, status) {
  const duplicate=toDoListData();
  duplicate.forEach((element) => {
    if (element.index === reindex) {
      element.completed = !element.completed;
    }
  });
  setData(duplicate);
}

export function clearCompletedTodos() {
  const toDoListDatas = toDoListData().filter((todo) => !todo.completed);
  resetIndex(toDoListDatas);
  setData(toDoListDatas);
}