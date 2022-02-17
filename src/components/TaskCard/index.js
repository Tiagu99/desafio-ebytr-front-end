import React from 'react';
import moment from 'moment';
import './TaskCard.css';

const TaskCard = ({ task }) => (
  <div className="card-div">
    <h1>{task.task}</h1>
    <h5>{moment(task.time).format('DD/MM/YYYY')}</h5>
  </div>
);

export default TaskCard;
