import React, { useState } from 'react';
import { Button } from 'antd';

const CounterComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={() => setCount(count + 1)}>ADD</Button>
      <Button onClick={() => setCount(count - 1)}>SUBTRACT</Button>
    </div>
  );
};

export default CounterComponent;
