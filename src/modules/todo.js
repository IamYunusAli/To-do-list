/* eslint-disable import/prefer-default-export */
export const toDoListData = () => JSON.parse(window.localStorage.getItem('taskData') || '[]');