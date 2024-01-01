import React, { useEffect, useState } from 'react';
import './UserInformation.css'
import Button from "../button/Button";
import {Navigate} from "react-router-dom";

function UserInformation() {


    return (
        <div className="UserInformation d-flex flex-column justify-content-center align-items-center">
            <h1>
                Welcome to our survey :)
            </h1>
            <p>
                Please enter your information.
            </p>
            <div className="mb-3">
                <div className="mb-2 fw-semibold">Name:</div>
                <input placeholder={"Please enter your name."} type={"text"}/>
            </div>

            <div className="mb-5">
                <div className="mb-2 fw-semibold">Email:</div>
                <input placeholder={"Please enter your email."} type={"email"}/>
            </div>

            <Button style={{background: "var(--primary)", color: "white"}}>
                Next
            </Button>
        </div>
    );
}

export default UserInformation;
