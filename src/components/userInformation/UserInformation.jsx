import React, { useEffect, useState } from 'react';
import Button from "../button/Button";
import {Link, Navigate} from "react-router-dom";
import TextInput from "../input/textInput/TextInput";

function UserInformation() {


    return (
        <div className="UserInformation d-flex flex-column justify-content-center align-items-center">
            <h1>
                Welcome to our survey :)
            </h1>

            <div className="mb-3">
                <div className="mb-2 fw-semibold">Name:</div>
                <TextInput placeholder={"Please enter your name."} type={"text"}/>
            </div>

            <div className="mb-5">
                <div className="mb-2 fw-semibold">Email:</div>
                <TextInput placeholder={"Please enter your email."} type={"email"}/>
            </div>


            <Link style={{textDecoration: "none", color:"white"}} to="/QuestionOne">
                <Button style={{background: "var(--primary)", color: "white"}}>Next</Button>
            </Link>

        </div>
    );
}

export default UserInformation;
