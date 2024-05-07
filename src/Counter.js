import React from 'react';
import './Counter.css'; // Import CSS file for styling

const Counter = ({ count, setCount }) => {
  const handleDecrement = () => {
    if (count === 0) {
      alert('Count cannot go below zero');
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-container">
      <h1 className="counter-heading">Counter: USING REACT</h1>
      <h2>Current count: {count}</h2>
      {count === 0 && <p>Error: Count cannot go below zero</p>}
      <div className="button-container">
        <button onClick={handleDecrement} disabled={count === 0}>
          Decrement
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
};

export default Counter;
