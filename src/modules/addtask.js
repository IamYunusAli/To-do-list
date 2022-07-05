export default function addTask(taskObject) {
  const listOfTask = JSON.parse(window.localStorage.getItem('taskData') || '[]');
  listOfTask.push(taskObject);
  window.localStorage.setItem('taskData', JSON.stringify(listOfTask));
}