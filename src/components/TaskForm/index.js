import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createTask } from '../../api';

const TaskForm = ({ callbackList }) => {
  const [state, setState] = useState({
    inputTask: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  }

  const handleClick = async () => {
    await createTask(state.inputTask);
    callbackList();
  }

  return(
    <div>
      <div className="">
        <Form.Control
          type="text"
          name="inputTask"
          aria-describedby="inputTaskHelp"
          placeholder="ex. New Task"
          onChange={ handleChange }
          value={ state.inputTask }
        />
        <Form.Text id="inputTaskHelp" muted>
          Must be 4 characters.
        </Form.Text>
      </div>
      <Button
        variant="primary"
        onClick={ handleClick }
        disabled={ state.inputTask.length < 4 }
      >Create Task</Button>
    </div>
  );
};

export default TaskForm;
