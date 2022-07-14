import addTask from '../addtask';
import { toDoListData } from '../todo';
import { setData } from '../setitems';
import { removeTask } from '../interactive';

const key = 'taskData';
const data = [{
  description: 'lorem ipsum coletas',
  completed: false,
  index: 1,
}, {
  description: 'ipsum lorem coletas',
  completed: false,
  index: 2,
}];
test('Should get  data from localStorage if exist ', () => {
  expect(Array.isArray(toDoListData())).toBe(true);
});
describe('When adding and removing a task you', () => {

  test('Should append the new task ', () => {
    addTask(data[0]);
    addTask(data[1]);
    expect(toDoListData().length).toEqual(2);
  });

  test('Should remove item from the list', () => {
    removeTask(1);
    expect(toDoListData().length).toEqual(1);
  });

});


test('Should add new data to localStorage ', () => {
  const expected = '{\"description\":\"lorem ipsum coletas\",\"completed\":false,\"index\":1}';
  setData(data[0]);
  expect(localStorage.getItem(key)).toEqual(expected);
});