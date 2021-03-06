import addTask from '../addtask.js';
import { toDoListData } from '../todo.js';
import { setData } from '../setitems.js';
import {
  removeTask, editTodo, completeTodo, clearCompletedTodos,
} from '../interactive.js';

const key = 'taskData';
const data = [{
  description: 'lorem ipsum coletas',
  completed: false,
  index: 1,
}, {
  description: 'wash clothes',
  completed: false,
  index: 2,
},
{
  description: 'head home',
  completed: true,
  index: 3,
},
{
  description: 'do projects',
  completed: false,
  index: 4,
},
];
test('Should get  data from localStorage if exist ', () => {
  expect(Array.isArray(toDoListData())).toBe(true);
});
describe('When adding and removing a task you', () => {
  test('Should append the new task ', () => {
    addTask(data[0]);
    addTask(data[1]);
    expect(toDoListData().length).toEqual(2);
    expect(toDoListData()[1].index).toBe(2);
  });

  test('Should remove item from the list', () => {
    removeTask(1);
    expect(toDoListData().length).toEqual(1);
    expect(toDoListData()[0].description).toBe('wash clothes');
  });
});
test('Editing a selected items', () => {
  const input = 'hello world';
  editTodo(1, input);
  expect(toDoListData()[0].description).toBe(input);
  expect(toDoListData()).toHaveLength(1);
});

test('completed', () => {
  completeTodo(1);
  expect(toDoListData()[0].completed).toBeTruthy();
  expect(toDoListData()).toHaveLength(1);
});

test('clear all completed items', () => {
  addTask(data[3]);
  expect(toDoListData()).toHaveLength(2);
  clearCompletedTodos();
  expect(toDoListData()).toHaveLength(1);
});
test('Should add new data to localStorage ', () => {
  const expected = '{"description":"lorem ipsum coletas","completed":false,"index":1}';
  setData(data[0]);
  expect(localStorage.getItem(key)).toEqual(expected);
});
