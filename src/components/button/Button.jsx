import React, { useEffect, useState } from 'react';
import './Button.css'

function Button({children, style}) {


    return (
        <button style={style} className="Button">{children}</button>
    );
}

export default Button;
