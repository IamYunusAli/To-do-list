export default function resetIndex(objectListIndex) {
  let sum = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const indexData of [...objectListIndex]) {
    sum += 1;
    indexData.index = sum;
  }
  window.localStorage.setItem('taskData', JSON.stringify(objectListIndex));
}