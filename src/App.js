import React, { useState, useEffect } from 'react';
import Counter from './Counter';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count:', count);
  }, [count]);

  return (
    <div>
      <Counter count={count} setCount={setCount} />
    </div>
  );
}

export default App;
