import React, { useState } from "react";

const ShortCurcuit = () => {
    const [demo, setDemo] = useState("Hello");
    return (
        <div>
            <h1>{demo || "Hello"}</h1>
            <h1>{demo && "World"}</h1>
        </div>
    );
};

export default ShortCurcuit;
