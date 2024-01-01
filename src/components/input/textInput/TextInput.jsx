import React, { useEffect, useState } from 'react';
import "./TextInput.css";

function TextInput({placeholder, type, style}) {

    return (
        <input style={style} className="text-input" placeholder={placeholder} type={type}/>
    );
}

export default TextInput;
