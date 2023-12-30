import React, { useEffect, useState } from 'react';
import './Header.css';
import Countdown from "../countdown/Countdown";

function Header() {

    return (
        <div className="d-flex flex-row align-items-center justify-content-between p-3 border-bottom ">
            <div className="title">
                Survey Application
            </div>

            <Countdown/>
        </div>
    );
}

export default Header;
