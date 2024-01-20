import React, {useEffect, useState} from 'react';
import Button from "../../button/Button";
import {Link} from "react-router-dom";
import TextInput from "../../input/textInput/TextInput";
import BackButton from "../../button/BackButton";
import NextButton from "../../button/NextButton";

function QuestionOne({setQuestionAnswer}) {

    const [input, setInput] = useState("");
    const handleSetInput = (value) => {
        setInput(value);
        localStorage.setItem('Q1', input);
    };

    const readDefaultInput = () => {
        const savedValue = localStorage.getItem('Q1') === null ? "" : localStorage.getItem('Q1');
        setInput(savedValue);
    };



    useEffect(() => {
        readDefaultInput()
    }, []);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h2 className="mb-5">
                1. What is your favorite fruit juice?
            </h2>
            <div className="mb-4">
                <TextInput value={input}  setInput={handleSetInput} placeholder={"Please enter your favorite fruit."} type={"text"}/>
            </div>


            <BackButton/>

            <Link style={{textDecoration: "none", color:"white"}} to="/QuestionTwo">
                <NextButton onClick={() => setQuestionAnswer(input)}/>
            </Link>

        </div>
    );
}

export default QuestionOne;
