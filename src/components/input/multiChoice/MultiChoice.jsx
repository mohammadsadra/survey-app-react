import React, {useEffect, useState} from 'react';
import './MultiChoice.css';
import {json} from "react-router-dom";

const MultiChoice = ({ options, multiple=true, selectedOptions, setSelectedOptions, questionNumber = '2' }) => {

    const handleLocalStorage = (item) => {
        let i = [];
        i = localStorage.getItem(questionNumber) === null ? [] : JSON.parse(localStorage.getItem(questionNumber))
        if (i.includes(item)){
            const index = i.indexOf(item)
            i.splice(index, 1)
        } else {
            i.push(item);
        }
        localStorage.setItem(questionNumber, JSON.stringify(i))
    }
    const handleCheckboxChange = (option) => {
        if (multiple) {
            if (selectedOptions.includes(option)) {
                setSelectedOptions(selectedOptions.filter((selected) => selected !== option));
            } else {
                setSelectedOptions([...selectedOptions, option]);
            }
            handleLocalStorage(option)
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
