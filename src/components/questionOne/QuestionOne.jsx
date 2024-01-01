import React, { useEffect, useState } from 'react';
import Button from "../button/Button";
import {Link, Navigate} from "react-router-dom";
import TextInput from "../input/TextInput";

function QuestionOne() {


    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h2>
                What is your favorite fruit juice?
            </h2>
            <div className="mb-3">
                <TextInput placeholder={"Please enter your favorite."} type={"text"}/>
            </div>


            <Link style={{textDecoration: "none", color:"white"}} to="/newpage">
                <Button style={{background: "var(--primary)", color: "white"}}>Next</Button>
            </Link>

        </div>
    );
}

export default QuestionOne;
