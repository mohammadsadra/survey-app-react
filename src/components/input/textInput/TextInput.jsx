import React, { useEffect, useState } from 'react';
import "./TextInput.css";

function TextInput({placeholder, type, style , setInput}) {
    const handleInputChange = (event) => {
        setInput(event.target.value);
    };
    return (
        <input onChange={handleInputChange} style={style} className="text-input" placeholder={placeholder} type={type}/>
    );
}

export default TextInput;
