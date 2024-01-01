import React from 'react';
import Button from "../button/Button";
import {Link} from "react-router-dom";
import TextInput from "../input/textInput/TextInput";
import MultiChoice from "../input/multiChoice/MultiChoice";
import BackButton from "../button/BackButton";
import NextButton from "../button/NextButton";

function QuestionThree() {

    const option = ["DowlatAbad", "Shosh", "Imam Hosein Squer", "Azadi"]
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h2 className="mb-5">
                3. Pick only one of this locations to open a new branch:
            </h2>
            <div className="mb-4">
                <MultiChoice options={option} multiple={false}/>
            </div>


            <BackButton/>

            <Link style={{textDecoration: "none", color:"white"}} to="/Thanks">
                <Button style={{background: "var(--secondary)", color: "white"}}>Finish</Button>
            </Link>

        </div>
    );
}

export default QuestionThree;
