import React, { useEffect, useState } from 'react';
import './Button.css'

function Button({children = "Click", style, onClick= ()=> {}}) {


    return (
        <button style={style} className="Button" onClick={onClick}>{children}</button>
    );
}

export default Button;
