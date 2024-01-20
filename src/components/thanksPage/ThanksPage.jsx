import React, {useEffect} from 'react';
import thanks from './thanks.jpeg';


function ThanksPage({userData, q1, q2, q3}) {

    useEffect(() => {
            console.log('All Information:')
            console.log(userData)
            console.log('Q1:', q1)
            console.log('Q2:', q2)
            console.log('Q3:', q3)
            localStorage.clear();

    }, []);


    return (
        <div className="d-flex flex-column justify-content-center align-items-center fadeIn">
            <img className="picture" alt={"logo"} src={thanks}/>
            <h2 className="mt-5 mb-3">
               Thanks for doing the survey!
            </h2>
        </div>
    );
}

export default ThanksPage;
