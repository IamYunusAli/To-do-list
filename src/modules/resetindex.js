export default function resetIndex(objectListIndex) {
  let sum = 0;
  // used the comment below to pass the for element while linter check
  // eslint-disable-next-line no-restricted-syntax
  for (const indexData of [...objectListIndex]) {
    sum += 1;
    indexData.index = sum;
  }
  window.localStorage.setItem('taskData', JSON.stringify(objectListIndex));
}