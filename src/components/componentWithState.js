import React from 'react';
import { useStateValue } from '../context/stateExample';

const Potato = () => {
    const [{ test, count }, dispatch] = useStateValue();
    console.log(test, dispatch);

    const action = () => {
        dispatch({ type: 'SOMETHING' });
        dispatch({ type: 'ADD' });
    };

    return (
        <div>
            <h1>component with state....</h1>
            <h2 onClick={action}>Click me...</h2>
            <p>VALUE IS...{test.toString()}</p>
            <p>Click count IS...{count.toString()}</p>
        </div>
    );
};

export default Potato;