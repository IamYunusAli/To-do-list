import { toDoListData } from './todo.js';
import { setData } from './setitems.js';

export default function addTask(taskinput) {
  const taskList = toDoListData();
  taskList.push(taskinput);
  setData(taskList);
}