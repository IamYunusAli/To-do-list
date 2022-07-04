/* eslint-disable linebreak-style */
import './style.css';
import { displayList } from './modules/displaytask.js';

const tasklist = [
  {
    description: 'Join Morning session call',
    completed: 'true',
    index: 1,
  },

  {
    description: 'Work with my  coding partner',
    completed: 'false',
    index: 2,
  },

  {
    description: 'Take a lunch break and rest',
    completed: 'false',
    index: 3,
  },
];

displayList(tasklist);