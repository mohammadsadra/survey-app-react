import React, {useEffect} from 'react';
import finish from './finish.png';


function FinishTime() {

    useEffect(() => {
        localStorage.clear();
    }, []);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center fadeIn">
            <img className="picture" alt={"logo"} src={finish}/>
            <h2 className="mt-5">
                Thanks for doing the survey!
            </h2>

            <h4 style={{color: "royalblue"}} className="mt-3">
                Your time is finished.
            </h4>

        </div>
    );
}

export default FinishTime;
