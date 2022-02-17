import React from 'react';
import { Button } from 'react-bootstrap';

const SortButtons = ({ handleClick }) => (
  <div>
     <Button
        name="task"
        variant="primary"
        onClick={ handleClick }
      >
        Nome
      </Button>
      <Button
        name="time"
        variant="primary"
        onClick={ handleClick }
      >
        Data
      </Button>
      <Button
        name="status"
        variant="primary"
        onClick={ handleClick }
      >
        Status
      </Button>

  </div>
);

export default SortButtons;
