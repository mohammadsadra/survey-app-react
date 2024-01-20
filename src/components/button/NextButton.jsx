import React from 'react';
import Button from "./Button";

const NextButton = ({onClick}) => {

    return (
        <Button onClick={onClick} style={{background: "var(--primary)", color: "white"}} > Next</Button>
    );
};

export default NextButton;
