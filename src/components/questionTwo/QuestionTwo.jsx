import React from 'react';
import Button from "../button/Button";
import {Link} from "react-router-dom";
import TextInput from "../input/textInput/TextInput";
import MultiChoice from "../input/multiChoice/MultiChoice";
import BackButton from "../button/BackButton";
import NextButton from "../button/NextButton";

function QuestionTwo() {

    const option = ["Tochal", "Seifi-Dowlat", "FruitLand"]
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h2 className="mb-5">
                2. Where is your favorite place to drink fruit juice?
            </h2>
            <div className="mb-4">
                <MultiChoice options={option} multiple={true}/>
            </div>

            <BackButton/>

            <Link style={{textDecoration: "none", color:"white"}} to="/QuestionThree">
                <NextButton/>
            </Link>

        </div>
    );
}

export default QuestionTwo;
