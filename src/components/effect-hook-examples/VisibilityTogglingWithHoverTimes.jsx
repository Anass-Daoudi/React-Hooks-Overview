import React, { useState, useEffect } from 'react';

const Div = () => {
    const [hoverTimes, setHoverTimes] = useState(0);

    useEffect(() => {
        alert(`Div is mounted or updated [actual hoverTimes:${hoverTimes}]`);

        return () => {
            alert(
                `Div will unmount or execute any eventual cleanup before updating [last hoverTimes:${hoverTimes}]`
            );
        }
    });

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

const VisibilityTogglingWithHoverTimes = () => {
    const [isDivShown, setIsDivShown] = useState(false);

    const toggleDivVisibility = () => setIsDivShown(!isDivShown);

    return (
        <React.Fragment>
            <p>Visibility Toggling with Hover Times</p>
            <button onClick={toggleDivVisibility}>{isDivShown ? 'Hide' : 'Show'} DIV</button>
            {isDivShown && <Div />}
        </React.Fragment>
    );
}

export default VisibilityTogglingWithHoverTimes;