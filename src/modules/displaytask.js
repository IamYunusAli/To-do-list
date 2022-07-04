/* eslint-disable import/prefer-default-export */
export const displayList = (tasklist) => {
  for (let i = 0; i < tasklist.length; i += 1) {
    const element = document.querySelector('.task-lister');
    element.innerHTML += `
                <li class="task-item">
                    <div class="task-input">
                      <div class="task-div">
                          <input class="checkbox" type="checkbox"/>
                          <label class="label">${tasklist[i].description}</label>
                        </div>
                        <i class="opt bi bi-three-dots-vertical"></i>
                    </div>
                </li> `;
  }
};