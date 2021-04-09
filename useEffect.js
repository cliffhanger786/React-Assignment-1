import React, {useState, useEffect} from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(10);

    useEffect(() => {
        console.log('useEffect working');
    }, [count]);

    const incrementCount = () => {
        setCount(count + 1);
    }
    const decrementCount = () => {
        setCount1(count1 - 1);
    }

    return (
        <div>
            <h1>Increment Count: {count}</h1>
            <button onClick={incrementCount}>Increment</button>

            <h1>Decrement Count: {count1}</h1>
            <button onClick={decrementCount}>Decrement</button>
        </div>
    );
}
export default UseEffect;
