import React, { useState } from "react";

const UseStateArray = () => {
    const anyName = [
        {
            name: "sujoy",
            age: 30,
            id: 0,
        },
        {
            name: "halder",
            age: 31,
            id: 1,
        },
        {
            name: "kumar",
            age: 32,
            id: 2,
        },
    ];

    const [text, setText] = useState(anyName);

    const ClearArray = () => {
        setText([]);
    };

    const remove = (id) => {
        // alert(id);
        const newArray = text.filter((currEle) => {
            return currEle.id !== id;
        });
        setText(newArray);
    };

    return (
        <>
            {text.map((currElement) => {
                return (
                    <h1 key={currElement.id}>
                        Hello I am {currElement.name} & age {currElement.age}
                        <button onClick={() => remove(currElement.id)}>
                            Remove
                        </button>
                    </h1>
                );
            })}
            <button onClick={ClearArray}>Clear</button>
        </>
    );
};

export default UseStateArray;
