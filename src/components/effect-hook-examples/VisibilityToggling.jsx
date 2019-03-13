import React, { useState, useEffect } from 'react';

const Div = () => {
    useEffect(() => {
        alert('Div is mounted');

        return () => {
            alert('Div will unmount');
        }
    });

    return (
        <div
            style={{
                width: '100px',
                height: '100px',
                backgroundColor: '#aaa'
            }}
        />
    );
}

const VisibilityToggling = () => {
    const [isDivShown, setIsDivShown] = useState(false);

    const toggleDivVisibility = () => setIsDivShown(!isDivShown);

    return (
        <React.Fragment>
            <p>Visibility Toggling</p>
            <button onClick={toggleDivVisibility}>{isDivShown ? 'Hide' : 'Show'} DIV</button>
            {isDivShown && <Div />}
        </React.Fragment>
    );
}

export default VisibilityToggling;