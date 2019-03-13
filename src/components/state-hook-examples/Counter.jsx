import React, { useState } from 'react';

const Counter = () => {
    const initialCount = 0;

    const [count, setCount] = useState(initialCount);

    const incrementCount = () => setCount(prevCount => prevCount + 1);
    const decrementCount = () => setCount(prevCount => prevCount - 1);
    const reset = () => setCount(initialCount);

    return (
        <React.Fragment>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>+1</button>
            <button onClick={decrementCount}>-1</button>
            <button onClick={reset}>Reset</button>
        </React.Fragment>
    );
}

export default Counter;