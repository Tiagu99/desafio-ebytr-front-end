import React, { useEffect, useState } from 'react';
import TaskForm from "./components/TaskForm";
import { getList } from './api';
import ListTask from './components/ListTask';
import SortButtons from './components/SortButtons';

function App() {
  const [state, setState] = useState([]);
  
  const fetchData = async () => {
    setState(await getList());
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = ({ target }) => {
    const { name } = target;
    const newList = [ ...state ];
    newList.sort((taskA, taskB) => {
      if (taskA[name] > taskB[name]) return 1
      if (taskA[name] < taskB[name]) return -1
      return 0
     });
    setState(newList);
  }

  return (
    <div className="App">
      <TaskForm callbackList={ fetchData } />
      <SortButtons handleClick={ handleClick } />
      <ListTask listTasks={ state } />
    </div>
  );
}

export default App;
