import React, { useState, useEffect } from 'react';

const useAsyncIncCounter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const intervalId = window.setInterval(() => setCounter(counter => counter + 1), 1000);
        console.log('mounted', intervalId);

        return () => {
            console.log('unmounted', intervalId);
            window.clearInterval(intervalId);
        };
    }, []);

    return counter;
}

const A = () => {
    const counter = useAsyncIncCounter();

    return <p>A counter:{counter}</p>;
};

const B = () => {
    const counter = useAsyncIncCounter();

    return <p>B counter:{counter}</p>;
}

const AsyncIncCounterWithHooksExample = () => {
    const [isVisible, setVisibility] = useState(false);

    return (
        <React.Fragment>
            <button
                onClick={() => setVisibility(isVisible => !isVisible)}>
                {isVisible ? 'Stop ' : 'Start '}
                Async Inc Counters Using Hooks
            </button>
            {
                isVisible && (
                    <React.Fragment>
                        <A />
                        <B />
                    </React.Fragment>
                )
            }
        </React.Fragment>
    )
};

export default AsyncIncCounterWithHooksExample;