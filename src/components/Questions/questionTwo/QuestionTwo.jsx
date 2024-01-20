import React, {useState} from 'react';
import Button from "../../button/Button";
import {Link} from "react-router-dom";
import TextInput from "../../input/textInput/TextInput";
import MultiChoice from "../../input/multiChoice/MultiChoice";
import BackButton from "../../button/BackButton";
import NextButton from "../../button/NextButton";

function QuestionTwo({setQuestionAnswer}) {

    const option = ["Tochal", "Seifi-Dowlat", "FruitLand"]
    const [selectedOptions, setSelectedOptions] = useState([]);
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h2 className="mb-5">
                2. Where is your favorite place to drink fruit juice?
            </h2>
            <div className="mb-4">
                <MultiChoice selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} options={option} multiple={true}/>
            </div>

            <BackButton/>

            <Link style={{textDecoration: "none", color:"white"}} to="/QuestionThree">
                <NextButton onClick={()=> setQuestionAnswer(selectedOptions)} />
            </Link>

        </div>
    );
}

export default QuestionTwo;
