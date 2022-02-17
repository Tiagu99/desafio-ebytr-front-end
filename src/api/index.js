const API_URL = 'http://localhost:3001/task';

export const createTask = async (task) => {
  const requestConfig = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      task,
    }),
  };

  await fetch(API_URL, requestConfig);
}

export const getList = () => {
  const taskList = fetch(API_URL)
    .then((response) => response.json)
    .then((response) => response.data);
  return taskList;
}