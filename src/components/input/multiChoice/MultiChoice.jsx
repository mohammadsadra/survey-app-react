import React, { useState } from 'react';
import './MultiChoice.css';

const MultiChoice = ({ options, multiple=true, selectedOptions, setSelectedOptions }) => {
    // const [selectedOptions, setSelectedOptions] = useState(multiple ? [] : '');

    const handleCheckboxChange = (option) => {
        if (multiple) {
            // Multiple selection logic
            if (selectedOptions.includes(option)) {
                setSelectedOptions(selectedOptions.filter((selected) => selected !== option));
            } else {
                setSelectedOptions([...selectedOptions, option]);
            }
        } else {
            setSelectedOptions([option])
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
