import { setData } from './setitems.js';

export default function resetIndex(index) {
  let sum = 0;
  // used the comment below to pass the for element while linter check
  // eslint-disable-next-line no-restricted-syntax
  for (const indexData of index) {
    sum += 1;
    indexData.index = sum;
  }
  setData(index);
}