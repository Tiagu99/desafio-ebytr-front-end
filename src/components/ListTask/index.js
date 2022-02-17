import React from 'react';
import TaskCard from '../TaskCard'
import './ListTask.css';

const ListTask = ({listTasks}) => (
  <div className="order-card-list">
    {listTasks.map((task) => (
      <TaskCard key={ task._id } task={ task } />
    ))}
  </div>
);

export default ListTask;
