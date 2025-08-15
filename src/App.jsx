import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counterSlice';

export default function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>🔢 Counter App</h2>
      <h3>Count: {count}</h3>
      <button 
        onClick={() => dispatch(increment())}
        style={{ marginRight: '10px' }}
      >
        Increment
      </button>
      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
}
