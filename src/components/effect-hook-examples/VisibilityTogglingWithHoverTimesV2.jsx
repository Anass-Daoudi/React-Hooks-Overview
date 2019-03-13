import React, { useState, useEffect, useRef } from 'react';

const Div = () => {
    const [hoverTimes, setHoverTimes] = useState(0);
    const ref = useRef(hoverTimes);

    useEffect(() => {
        if (hoverTimes === 0) {
            alert(`Div is mounted [actual hoverTimes:${hoverTimes}]`);
        } else {
            alert(`Div is updated [actual hoverTimes:${hoverTimes}]`);
        }

        ref.current = hoverTimes;

    });

    useEffect(() => {
        return () => {
            alert(`Div will unmount [actual hoverTimes:${ref.current}]`);
        }
    }, []);

    return (
        <div
            style={{
                width: '100px',
                height: '100px',
                backgroundColor: '#aaa'
            }}
            onMouseEnter={() => setHoverTimes(prevHoverTimes => prevHoverTimes + 1)}
        >
            {hoverTimes}
        </div>
    );
}

const VisibilityTogglingWithHoverTimesV2 = () => {
    const [isDivShown, setIsDivShown] = useState(false);

    const toggleDivVisibility = () => setIsDivShown(!isDivShown);

    return (
        <React.Fragment>
            <p>Visibility Toggling with Hover Times v2</p>
            <button onClick={toggleDivVisibility}>{isDivShown ? 'Hide' : 'Show'} DIV</button>
            {isDivShown && <Div />}
        </React.Fragment>
    );
}

export default VisibilityTogglingWithHoverTimesV2;