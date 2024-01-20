import React, { useEffect, useState } from 'react';
import Button from "../button/Button";
import {Link, Navigate} from "react-router-dom";
import TextInput from "../input/textInput/TextInput";

function UserInformation({setUserData}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const handleName = (value) => {
        setName(value); // Update state
    };

    const handleEmail = (value) => {
        setEmail(value); // Update state
    };

    return (
        <div className="UserInformation d-flex flex-column justify-content-center align-items-center">
            <h1>
                Welcome to our survey :)
            </h1>

            <div className="mb-3">
                <div className="mb-2 fw-semibold">Name:</div>
                <TextInput setInput={(data => handleName(data))} placeholder={"Please enter your name."} type={"text"}/>
            </div>

            <div className="mb-5">
                <div className="mb-2 fw-semibold">Email:</div>
                <TextInput setInput={(data => handleEmail(data))} placeholder={"Please enter your email."} type={"email"}/>
            </div>


            <Link style={{textDecoration: "none", color:"white"}} to="/QuestionOne">
                <Button onClick={setUserData("Name: " + name + ". Email: " + email)} style={{background: "var(--primary)", color: "white"}}>Next</Button>
            </Link>

        </div>
    );
}

export default UserInformation;
