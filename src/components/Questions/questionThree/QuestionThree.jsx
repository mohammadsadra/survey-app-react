import React, {useEffect, useState} from 'react';
import Button from "../../button/Button";
import {Link} from "react-router-dom";
import TextInput from "../../input/textInput/TextInput";
import MultiChoice from "../../input/multiChoice/MultiChoice";
import BackButton from "../../button/BackButton";
import NextButton from "../../button/NextButton";

function QuestionThree({setQuestionAnswer}) {

    const option = ["DowlatAbad", "Shosh", "Imam Hosein Squer", "Azadi"]
    const [selectedOptions, setSelectedOptions] = useState([]);

    const readDefaultInput = () => {
        const savedValue = localStorage.getItem('Q3');
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
                3. Pick only one of this locations to open a new branch:
            </h2>
            <div className="mb-4">
                <MultiChoice questionNumber={'Q3'} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} options={option} multiple={false}/>
            </div>


            <BackButton/>

            <Link style={{textDecoration: "none", color:"white"}} to="/Thanks">
                <Button onClick={() => setQuestionAnswer(selectedOptions)} style={{background: "var(--secondary)", color: "white"}}>Finish</Button>
            </Link>

        </div>
    );
}

export default QuestionThree;
