import { useEffect, useState } from 'react';

import { TextField, Button } from '@mui/material';
import TodoItem from './todo-item';

const Todo = () => {

  const todosItems = localStorage.getItem('todos');
  const [todos, setTodos] = useState(todosItems ? JSON.parse(todosItems) : []);
  const [todoText, setTodoText] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleCreateButtonCLick = () => {
    if (todoText.trim().length === 0) {
      return;
    }

    const newArr = [
      ...todos,
      { id: Math.random(), text: todoText, isCompleted: false }
    ];
    setTodos(newArr);
    setTodoText('');
  }

  const handleDelete = (id) => {
    const updateTodos = [...todos];
    updateTodos.splice(updateTodos.findIndex(todo => todo.id === id), 1);
    setTodos(updateTodos);
  }

  return (
    <div className="todo-container">
      <div className='input-container'>
        <TextField value={todoText} variant='filled' onChange={(e) => setTodoText(e.currentTarget.value)} placeholder='Enter task name' fullWidth />
        <Button variant='contained' onClick={handleCreateButtonCLick} >Add</Button>
      </div>
      <div>{
        todos.map((todo, index) => <TodoItem key={todo.id} id={todo.id} isCompleted={todo.isCompleted} text={todo.text} onDelete={handleDelete} onToggle={check => {
          const newTodos = [...todos];
          newTodos[index].isCompleted = check;
          setTodos(newTodos);
        }} />)
      }
      </div>
    </div>
  )
}

export default Todo