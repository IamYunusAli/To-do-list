export default function updateCompletedDisplay() {
  const checkbox = document.querySelectorAll('.checkbox');
  const label = document.querySelectorAll('.label');
  const listItemObject = JSON.parse(window.localStorage.getItem('taskData') || '[]');
  // eslint-disable-next-line no-restricted-syntax
  for (const element of [...listItemObject]) {
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