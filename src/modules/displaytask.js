/* eslint-disable no-restricted-syntax */
import { toDoListData } from './todo.js';
import { setData } from './setitems.js';
import updateCompletedDisplay from './updatecomplete.js';

export default function displayList() {
  const tasklists = toDoListData();
  for (let items = 0; items < tasklists.length; items += 1) {
    const listPlaceholder = document.querySelector('.task-lister');
    listPlaceholder.innerHTML += `
                  <li class="task-items">
                    <div class="task-inner-box"  id="${tasklists[items].index}">
                      <div class="task-items-item">
                        <div class="task-div line-through ${tasklists[items].index}">
                            <input class="checkbox ${tasklists[items].index}" type="checkbox"/>
                            <div id="${tasklists[items].index}" class="label">${tasklists[items].description}</div>
                          </div>
                          <div class="optionBtn editBtn ${tasklists[items].index}" id="${tasklists[items].index}">
                          <i class="opt bi bi-three-dots-vertical"></i>
                          </div>
                          <div class="optionBtn deleteBtn removeBtn ${tasklists[items].index} hidden" id="${tasklists[items].index}">
                          <i class="bi bi-trash-fill"></i>
                          </div>
                      </div>
                      </div>
                    </li>
                  `;
  }
  const editBtn = document.querySelectorAll('.editBtn');
  const removeBtn = document.querySelectorAll('.removeBtn');
  const taskIn = document.querySelectorAll('.task-inner-box');
  const label = document.querySelectorAll('.label');
  const taskListPlaceholder = document.querySelector('.task-lister');

  const clearSelection = () => {
    for (const boxClassList of [...Object(taskIn)]) {
      if (boxClassList.classList.contains('selected')) {
        boxClassList.classList.remove('selected');
      }
    }
    for (const btn of [...Object(removeBtn)]) {
      btn.classList.add('hidden');
    }
    for (const btn of [...Object(editBtn)]) {
      btn.classList.remove('hidden');
    }
  };

  editBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const indexEdit = parseInt(btn.id, 10) - 1;
      btn.classList.add('hidden');
      removeBtn[indexEdit].classList.remove('hidden');
    });
  });

  function resetIndex(index) {
    let sum = 0;
    for (const indexData of index) {
      sum += 1;
      indexData.index = sum;
    }
    setData(index);
  }

  const items = JSON.parse(window.localStorage.getItem('taskData'));
  removeBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.id, 10) - 1;
      items.splice(id, 1);
      resetIndex(items);
      taskListPlaceholder.innerHTML = '';
      displayList();
    });
  });

  taskIn.forEach((box) => {
    box.addEventListener('click', () => {
      clearSelection(taskIn);
      box.classList.add('selected');
      const id = parseInt(box.id, 10) - 1;
      removeBtn[id].classList.remove('hidden');
      editBtn[id].classList.add('hidden');
    });
  });

  label.forEach((lbl) => {
    lbl.addEventListener('click', () => {
      lbl.contentEditable = 'true';
    });
    lbl.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        lbl.contentEditable = 'false';
        const str = lbl.textContent;
        let id = lbl.id - 1;
        if (id < 0) { id = 0; }
        toDoListData[id].description = str;
        setData(toDoListData);
        taskListPlaceholder.innerHTML = '';
        displayList();
      }
    });
  });

  function updateCompletedData(numberIndex, completedMark) {
    tasklists[numberIndex].completed = completedMark;
    setData(tasklists);
    updateCompletedDisplay();
  }

  const checkbox = document.querySelectorAll('.checkbox');
  let indexCheckBox = 0;
  while (indexCheckBox < checkbox.length) {
    checkbox[indexCheckBox].addEventListener('change', (e) => {
      if (e.target.checked) {
        let number = parseInt(e.target.classList[1], 10) - 1;
        if (number < 0) { number = 0; }
        updateCompletedData(number, true);
      } else {
        let number = parseInt(e.target.classList[1], 10) - 1;
        if (number < 0) { number = 0; }
        updateCompletedData(number, false);
      }
    });
    indexCheckBox += 1;
  }
}