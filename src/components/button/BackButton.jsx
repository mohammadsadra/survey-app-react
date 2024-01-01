import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "./Button";

const BackButton = () => {
    let navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <Button style={{background: "red", color:"white", marginBottom:"10px"}} onClick={goBack}>Back</Button>
    );
};

export default BackButton;
