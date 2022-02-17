import React from 'react';
import TaskCard from '../TaskCard'

const ListTask = ({listTasks}) => {

  return(
    <div className="order-card-list">
      {listTasks.map((task) => (
        <TaskCard key={ task._id } task={ task } />
      ))}
    </div>
  );
};

export default ListTask;
