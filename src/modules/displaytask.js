/* eslint-disable no-restricted-syntax */
import { toDoListData } from './todo.js';
import updateCompletedDisplay from './updatecomplete.js';

export default function displayList() {
  const listItemObject = JSON.parse(window.localStorage.getItem('taskData') || '[]');
  for (let list = 0; list < listItemObject.length; list += 1) {
    const listPlaceholder = document.querySelector('.task-lister');
    listPlaceholder.innerHTML += `
                  <li class="task-list">
                    <div class="task-inner-box"  id="${listItemObject[list].index}">
                      <div class="task-list-item">
                        <div class="task-div line-through ${listItemObject[list].index}">
                            <input class="checkbox ${listItemObject[list].index}" type="checkbox"/>
                            <div id="${listItemObject[list].index}" class="label">${listItemObject[list].description}</div>
                          </div>
                          <div class="optionBtn editBtn ${listItemObject[list].index}" id="${listItemObject[list].index}">
                          <i class="opt bi bi-three-dots-vertical"></i>
                          </div>
                          <div class="optionBtn deleteBtn removeBtn ${listItemObject[list].index} hidden" id="${listItemObject[list].index}">
                          <i class="bi bi-trash-fill"></i>
                          </div>
                      </div>
                      </div>
                    </li>
                  `;
  }
  const editBtn = document.querySelectorAll('.editBtn');
  const removeBtn = document.querySelectorAll('.removeBtn');
  const taskInnerBox = document.querySelectorAll('.task-inner-box');
  const label = document.querySelectorAll('.label');
  const taskListPlaceholder = document.querySelector('.task-lister');

  const clearSelection = () => {
    for (const boxClassList of [...Object(taskInnerBox)]) {
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

  function resetIndex(objectListIndex) {
    let sum = 0;
    for (const indexData of [...objectListIndex]) {
      sum += 1;
      indexData.index = sum;
    }
    window.localStorage.setItem('taskData', JSON.stringify(objectListIndex));
  }

  const list = JSON.parse(window.localStorage.getItem('taskData'));
  removeBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.id, 10) - 1;
      list.splice(id, 1);
      resetIndex(list);
      taskListPlaceholder.innerHTML = '';
      displayList();
    });
  });

  taskInnerBox.forEach((box) => {
    box.addEventListener('click', () => {
      clearSelection(taskInnerBox);
      box.classList.add('selected');
      const id = parseInt(box.id, 10) - 1;
      removeBtn[id].classList.remove('hidden');
      editBtn[id].classList.add('hidden');
    });
  });

  label.forEach((lbl) => {
    lbl.addEventListener('dblclick', () => {
      lbl.contentEditable = 'true';
    });
    lbl.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        lbl.contentEditable = 'false';
        const str = lbl.textContent;
        let id = lbl.id - 1;
        if (id < 0) { id = 0; }
        toDoListData[id].description = str;
        window.localStorage.setItem('taskData', JSON.stringify(toDoListData));
        taskListPlaceholder.innerHTML = '';
        displayList();
      }
    });
  });

  function updateCompletedData(numberIndex, completedMark) {
    listItemObject[numberIndex].completed = completedMark;
    window.localStorage.setItem('taskData', JSON.stringify(listItemObject));
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