import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
    const [count, setCount] = useState(0);

    //     const increment = () => {
    //         setCount(count + 1);
    //     };

    //     const Decrement = () => {
    //         setCount(count - 1);
    //     };

    //     const Reset = () => {
    //         setCount(0);
    //     };

    return (
        <div className="text">
            <h1>Count:{count}</h1>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Increment
            </button>
            <button
                onClick={() => {
                    setCount(count - 1);
                }}
            >
                Decrement
            </button>
            <button
                onClick={() => {
                    setCount(0);
                }}
            >
                Reset
            </button>
        </div>
    );
};

export default Counter;
