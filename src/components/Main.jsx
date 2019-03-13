import React from 'react';
import Counter from './state-hook-examples/Counter';
import Todos from './state-hook-examples/Todos';
import VisibilityToggling from './effect-hook-examples/VisibilityToggling';
import VisibilityTogglingWithHoverTimes from './effect-hook-examples/VisibilityTogglingWithHoverTimes';
import VisibilityTogglingWithHoverTimesV2 from './effect-hook-examples/VisibilityTogglingWithHoverTimesV2';
import AsyncIncCounterWithHOCExample from './hoc-vs-hooks/AsyncIncCounterWithHOCExample';
import AsyncIncCounterWithHooksExample from './hoc-vs-hooks/AsyncIncCounterWithHooksExample';

const Main = () => (
    <React.Fragment>
        <Counter />
        <hr />
        <Todos />
        <hr />
        <VisibilityToggling />
        <hr />
        <VisibilityTogglingWithHoverTimes />
        <hr />
        <VisibilityTogglingWithHoverTimesV2 />
        <hr />
        <AsyncIncCounterWithHOCExample />
        <hr />
        <AsyncIncCounterWithHooksExample />
    </React.Fragment>
);

export default Main;
