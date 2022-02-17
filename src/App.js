import React, { useEffect, useState } from 'react';
import TaskForm from "./components/TaskForm";
import { getList } from './api';
import ListTask from './components/ListTask';

function App() {
  const [state, setState] = useState([]);
  
  const fetchData = async () => {
    setState(await getList());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <TaskForm callbackList={ fetchData } />
      <ListTask listTasks={ state } />
    </div>
  );
}

export default App;
