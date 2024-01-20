import React, { useState } from 'react';
import './MultiChoice.css';

const MultiChoice = ({ options, multiple=true, selectedOptions, setSelectedOptions, questionNumber = '2' }) => {
    // const [selectedOptions, setSelectedOptions] = useState(multiple ? [] : '');

    const handleCheckboxChange = (option) => {
        if (multiple) {
            if (selectedOptions.includes(option)) {
                setSelectedOptions(selectedOptions.filter((selected) => selected !== option));
                localStorage.setItem(questionNumber,JSON.stringify([selectedOptions.filter((selected) => selected !== option)]))
            } else {
                setSelectedOptions([...selectedOptions, option]);
                localStorage.setItem(questionNumber, JSON.stringify([...selectedOptions, option]))
            }
        } else {
            setSelectedOptions([option])
            localStorage.setItem(questionNumber, JSON.stringify([option]))
        }
    };

    return (
        <div className={"containerStyle"}>
            {options.map((option) => (
                <label key={option} className={"labelStyle"}>
                    <input
                        type={multiple ? "checkbox" : "radio"}
                        name="multiChoice"
                        value={option}
                        checked={multiple ? selectedOptions.includes(option) : selectedOptions[0] === option}
                        onChange={() => handleCheckboxChange(option)}
                        className={"checkboxStyle"}
                    />
                    <span className={"textStyle"}>{option}</span>
                </label>
            ))}
        </div>
    );
};

export default MultiChoice;
