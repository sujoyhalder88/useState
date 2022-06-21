import React, { useState } from "react";

const UseStateObject = () => {
    const [text, setText] = useState({ name: "Sujoy", age: 32, degree: "HS" });

    const change = () => {
        setText({ ...text, age: 30 });
    };

    return (
        <div>
            <h1>
                Name:{text.name} age:{text.age} degree:{text.degree}
            </h1>
            <button onClick={change}>Click Me</button>
        </div>
    );
};

export default UseStateObject;
