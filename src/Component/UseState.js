import React, { useState } from "react";

const UseState = () => {
    const [name, setName] = useState("sujoy");

    const changeName = () => {
        // if (name === "sujoy") {
        //     setName("Hello , Sujoy Halder");
        // } else {
        //     setName("sujoy");
        // }
        name === "sujoy" ? setName("Hello , Sujoy Halder") : setName("sujoy");
    };

    return (
        <div>
            <h1>{name}</h1>
            <button onClick={changeName}>Click Me</button>
        </div>
    );
};

export default UseState;
