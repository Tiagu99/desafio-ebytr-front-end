import { fireEvent, render, screen } from "@testing-library/react";
import App from '../App';

describe('Teste do botão de criação de uma nova task', () => {
  test('O botão deve estar desabilitado quando o input de nova task estiver vazio', () => {
    render(<App />);
  
    const createTaskButton = screen.getByRole('button', { name: 'Create Task' });

    expect(createTaskButton).toBeDisabled();
  });
  test('O botão fica habilitado quando tem o minímo de caracteres no input de nova task', () => {
    render(<App />);

    const createTaskButton = screen.getByRole('button', { name: 'Create Task' });
    const inputTask = screen.getByRole('textbox');
    
    fireEvent.change(inputTask, { target: { value: 'New task' } });

    expect(createTaskButton).toBeEnabled();
  });

  test('Após click no botão o input deve ficar vazio', () => {
    render(<App />);

    const createTaskButton = screen.getByRole('button', { name: 'Create Task' });
    const inputTask = screen.getByRole('textbox');

    fireEvent.change(inputTask, { target: { value: 'New task' } });

    expect(inputTask.target).toHaveValue('New task');

    fireEvent.click(createTaskButton);

    expect(inputTask.target).toHaveValue('');
  });
});
