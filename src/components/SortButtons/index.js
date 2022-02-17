import React from 'react';
import { Button } from 'react-bootstrap';
import './SortButtons.css';

const SortButtons = ({ handleClick }) => (
  <div className="buttons-sort-container">
    <div className="button-container">
      <Button
        name="task"
        variant="primary"
        onClick={ handleClick }
      >
        Nome
      </Button>
    </div>
    <div className="button-container">
      <Button
        name="time"
        variant="primary"
        onClick={ handleClick }
      >
        Data
      </Button>
    </div>
    <div className="button-container">
      <Button
        name="status"
        variant="primary"
        onClick={ handleClick }
      >
        Status
      </Button>
    </div>
  </div>
);

export default SortButtons;
