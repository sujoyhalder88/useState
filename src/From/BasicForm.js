import React, { useState } from "react";

const BasicForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [store, setStore] = useState([]);

    const submit = (e) => {
        e.preventDefault();

        if (email && password) {
            const newStore = {
                id: new Date().getTime().toString(),
                email,
                password,
            };
            setStore([...store, newStore]);

            setEmail("");
            setPassword("");
        } else {
            alert("Please fild The Text");
        }
    };

    return (
        <>
            <form action="" onSubmit={submit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <div>
                {store.map((currElement) => {
                    const { id, email, password } = currElement;
                    return (
                        <div key={id}>
                            <p>{email}</p>
                            <p>{password}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default BasicForm;
