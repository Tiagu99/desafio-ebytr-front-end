import React, { useEffect, useState } from 'react';
import TaskForm from "./components/TaskForm";
import { getList } from './api';
import ListTask from './components/ListTask';

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function fetchData(){
      setState(await getList());
    };

    fetchData();

  }, []);
  return (
    <div className="App">
      <TaskForm />
      <ListTask listTasks={ state } />
    </div>
  );
}

export default App;
