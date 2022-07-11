import { toDoListData } from './todo.js';

export default function updateCompletedDisplay() {
  const checkbox = document.querySelectorAll('.checkbox');
  const label = document.querySelectorAll('.label');
  const listItemObject = toDoListData();
  // used the comment below to pass the for element while linter check
  // eslint-disable-next-line no-restricted-syntax
  for (const element of listItemObject) {
    if (element.completed === true) {
      const id = parseInt(element.index, 10) - 1;
      label[id].classList.add('line-through');
      checkbox[id].setAttribute('checked', 'checked');
    } else {
      const id = parseInt(element.index, 10) - 1;
      label[id].classList.remove('line-through');
      checkbox[id].setAttribute('unchecked', 'unchecked');
    }
  }
}