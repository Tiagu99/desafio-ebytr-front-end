import React from 'react';
import moment from 'moment';
import './OrderCard.css';

const TaskCard = ({ task }) => (
  <div className="card-div">
    <h1>{task.task}</h1>
    <p>{moment(task.time).format('DD/MM/YYYY')}</p>
  </div>
);

export default TaskCard;
