import React, {useEffect, useState} from 'react';
import Button from "../../button/Button";
import {Link} from "react-router-dom";
import TextInput from "../../input/textInput/TextInput";
import MultiChoice from "../../input/multiChoice/MultiChoice";
import BackButton from "../../button/BackButton";
import NextButton from "../../button/NextButton";

function QuestionTwo({setQuestionAnswer}) {

    const option = ["Tochal", "Seifi-Dowlat", "FruitLand"]
    const [selectedOptions, setSelectedOptions] = useState([]);

    const readDefaultInput = () => {
        const savedValue = localStorage.getItem('Q2');
        if (savedValue === null){
            setSelectedOptions([])
            return
        }
        if (savedValue !== null || savedValue !== ""){
            setSelectedOptions(JSON.parse(savedValue))
        }

    };

    useEffect(() => {
        readDefaultInput()
    }, []);
    return (
        <div className="d-flex flex-column justify-content-center align-items-center fadeIn">
            <h2 className="mb-5">
                2. Where is your favorite place to drink fruit juice?
            </h2>
            <div className="mb-4">
                <MultiChoice questionNumber={'Q2'} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} options={option} multiple={true}/>
            </div>

            <BackButton/>

            <Link style={{textDecoration: "none", color:"white"}} to="/QuestionThree">
                <NextButton onClick={()=> setQuestionAnswer(selectedOptions)} />
            </Link>

        </div>
    );
}

export default QuestionTwo;
