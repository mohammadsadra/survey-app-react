import React, {useEffect} from 'react';


function ThanksPage({logDate}) {

    useEffect(() => {
        logDate();
        localStorage.clear();
    }, []);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h2 className="mt-5 mb-3">
               Thanks for doing the survey!
            </h2>
        </div>
    );
}

export default ThanksPage;
