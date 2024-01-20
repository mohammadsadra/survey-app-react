import React, { useEffect, useState } from 'react';
import Button from "../button/Button";
import {Link, Navigate} from "react-router-dom";
import TextInput from "../input/textInput/TextInput";

function UserInformation({setUserData}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const handleName = (value) => {
        setName(value); // Update state
        localStorage.setItem('name', name);
    };

    const handleEmail = (value) => {
        setEmail(value);
        localStorage.setItem('email', email);
    };

    const readDefaultInput = () => {
        const savedName = localStorage.getItem('name') === null ? "" : localStorage.getItem('name');
        setName(savedName);

        const savedEmail = localStorage.getItem('email') === null ? "" : localStorage.getItem('email');
        setEmail(savedEmail);
    };

    useEffect(() => {
        readDefaultInput()
    }, []);

    return (
        <div className="UserInformation d-flex flex-column justify-content-center align-items-center">
            <h1>
                Welcome to our survey :)
            </h1>

            <div className="mb-3">
                <div className="mb-2 fw-semibold">Name:</div>
                <TextInput value={name} setInput={(data => handleName(data))} placeholder={"Please enter your name."} type={"text"}/>
            </div>

            <div className="mb-5">
                <div className="mb-2 fw-semibold">Email:</div>
                <TextInput value={email} setInput={(data => handleEmail(data))} placeholder={"Please enter your email."} type={"email"}/>
            </div>


            <Link style={{textDecoration: "none", color:"white"}} to="/QuestionOne">
                <Button onClick={() => setUserData("Name: " + name + ". Email: " + email)} style={{background: "var(--primary)", color: "white"}}>Next</Button>
            </Link>

        </div>
    );
}

export default UserInformation;
