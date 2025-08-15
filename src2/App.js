import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask, toggleTask } from './features/taskSlice';

export default function App() {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask(taskText));
      setTaskText('');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>📝 Task List</h2>
      
      <input 
        type="text" 
        value={taskText} 
        onChange={(e) => setTaskText(e.target.value)} 
        placeholder="Enter a new task" 
        style={{ padding: '5px', marginRight: '10px' }}
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul style={{ marginTop: '20px', listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li 
            key={task.id} 
            style={{ 
              marginBottom: '10px', 
              textDecoration: task.completed ? 'line-through' : 'none' 
            }}
          >
            {task.text}
            <button 
              style={{ marginLeft: '10px' }} 
              onClick={() => dispatch(toggleTask(task.id))}
            >
              Toggle
            </button>
            <button 
              style={{ marginLeft: '5px', color: 'red' }} 
              onClick={() => dispatch(removeTask(task.id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
