import React, { useState } from "react";
import "./App.css";

const App = () => {
    const [text, setText] = useState("Hello World");

    // const ChangeText = () => {
    //     setText("Hello Sujoy");
    // };
    return (
        <div className="text">
            <h1>{text}</h1>
            <button
                onClick={() => {
                    setText("Change The State");
                }}
            >
                Click Me
            </button>
        </div>
    );
};

export default App;
