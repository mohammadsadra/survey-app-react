import React, { useEffect, useState } from 'react';
import './Countdown.css';

function Countdown() {
    const [start,setStart] = useState(false)
    const [count,setCount] = useState(0)

    const [hour1,setHour1] = useState(0);
    const [hour2, setHour2] = useState(0);

    const [minute1, setMinute1] = useState(0);
    const [minute2, setMinute2] = useState(2);

    const [second1, setSecond1] = useState(0);
    const [second2, setSecond2] = useState(0);

    useEffect(()=>{
        setStart(true)
    },[])

    useEffect(()=>{
        setTimeout(() => {
            setCount(count+1)

            if (second2 > 0 ) {
                setSecond2(second2-1)
                return
            }

            if (second1 > 0) {
                setSecond1(second1-1)
                setSecond2(9)
                return
            }

            if (minute2 > 0) {
                setMinute2(minute2 - 1)
                setSecond1(5)
                setSecond2(9)
                return
            }

            if (minute1 > 0) {
                setMinute1(minute1 - 1)
                setMinute2(9)
                setSecond1(5)
                setSecond2(9)
                return
            }

            if (hour2 > 0) {
                setHour2(hour2 - 1)
                setMinute1(5)
                setMinute2(9)
                setSecond1(5)
                setSecond2(9)
                return
            }

            if (hour1 > 0) {
                setHour1(hour1 - 1)
                setHour2(9)
                setMinute1(5)
                setMinute2(9)
                setSecond1(5)
                setSecond2(9)
                return
            }


        }, 1000);
    },[start,count])

    return (
        <div className="d-flex flex-row align-items-center countdown">
            <div className="d-flex flex-row justify-content-center align-items-center">
                <div>{minute1}</div>
                <div>{minute2}</div>
            </div>
            <div>:</div>
            <div className="d-flex flex-row justify-content-center align-items-center">
                <div>{second1}</div>
                <div>{second2}</div>
            </div>
        </div>
    );
}

export default Countdown;
