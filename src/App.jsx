import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, selectTodos } from './slice/todoslice';

function App() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      dispatch(addTodo({
        id: Date.now(),
        text: todoText,
        completed: false,
      }));
      setTodoText('');
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <h1 style={{color:'red'}} className='text-center mt-5 '>ToDo App</h1>
     <div  className='text-center mt-5 '>
        <input  style={{borderRadius:'20px',width:'500px', height:'50px'}}
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Enter your todo..."
        />
     </div>
<div  className='text-center mt-3'>
        <button className='btn btn-success' onClick={handleAddTodo}>Add Todo</button>
  
</div>     
<div  className='text-center'>
   <h2 style={{color:'red'}}>All Todos</h2>
  
</div>      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;