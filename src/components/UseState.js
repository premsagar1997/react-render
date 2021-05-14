/**useState and Render
 * The setter function from a useState hook will cause the component to re-render.
 * The exception is when you update a State Hook to the same value as the currect state.
 * Same value after the initial render - The component will not re-render.
 * Same value after re-renders - React will render that specific component one more time and bails out from any subsequent renders.
 */

import React, { useState } from 'react';

const UseState = () => {
  const [count, setCount] = useState(0);
  console.log('inside UseState component...');

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count {count}</button>
      <button onClick={() => setCount(5)}>Count to 5 - {count}</button>
      <button onClick={() => setCount(0)}>Count to 0 - {count}</button>
    </div>
  );
};

export default UseState;
