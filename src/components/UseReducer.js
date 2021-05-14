/**The dispatch function from useReducer hook will cause the component to re-render.
 * The exception is when you update the state to the same value as the current state
 * Same value after the initial render - The component will not re-render.
 * Same value after re-renders - React will render that specific component one more time and bails out from any subsequent renders.
 */

import React, { useReducer } from 'react';

const intialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'reset': return intialState;
    default: return state;
  }
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, intialState);
  console.log('UseReducer Render...');

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  );
};

export default UseReducer;
