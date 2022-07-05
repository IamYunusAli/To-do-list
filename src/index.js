/* eslint-disable linebreak-style */
import './style.css';

import TaskClass from './modules/TaskClass.js';
import displayList from './modules/displaytask.js';
import addTask from './modules/addtask.js';
import updateCompletedDisplay from './modules/updatecomplete.js';

const inputTask = document.querySelector('#input-task');
const taskListPlaceholder = document.querySelector('.task-lister');
const notifier = document.querySelector('.note');

displayList();
updateCompletedDisplay();

// Execute a function when the user presses a key on the keyboard
inputTask.addEventListener('keypress', (event) => {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === 'Enter') {
    const toDoListData = JSON.parse(window.localStorage.getItem('taskData') || '[]');
    event.preventDefault();
    if (inputTask.value === '') {
      notifier.classList.remove('hidden');
    } else {
      const index = toDoListData.length + 1;
      const toDoClass = new TaskClass(inputTask.value.trim(), false, index);
      addTask(toDoClass);
      taskListPlaceholder.innerHTML = '';
      displayList();
      inputTask.value = '';
      notifier.classList.add('hidden');
    }
  }
});
