import React, { useEffect, useState } from 'react';
import './Countdown.css';

function Countdown() {
    const defaultTime = 2
    const [start,setStart] = useState(false)
    const [count,setCount] = useState(0)

    const [hour1,setHour1] = useState(0);
    const [hour2, setHour2] = useState(0);

    const [minute1, setMinute1] = useState(0);
    const [minute2, setMinute2] = useState(defaultTime);

    const [second1, setSecond1] = useState(0);
    const [second2, setSecond2] = useState(0);

    const saveTime = () =>{
        localStorage.setItem('minute1', minute1.toString());
        localStorage.setItem('minute2', minute2.toString());

        localStorage.setItem('second1', second1.toString());
        localStorage.setItem('second2', second2.toString());
    }
    const readTime = () =>{
        if (localStorage.getItem('minute1') === null || localStorage.getItem('minute1') === ""){
            setMinute2(defaultTime)
            return
        }
        if (localStorage.getItem('minute1') === "0" && localStorage.getItem('minute2') === "0" && localStorage.getItem('second1') === "0" && localStorage.getItem('second2') === "0" ){
            setMinute2(defaultTime)
            return
        }
        setMinute1(parseInt(localStorage.getItem('minute1')))
        setMinute2(parseInt(localStorage.getItem('minute2')))

        setSecond1(parseInt(localStorage.getItem('second1')))
        setSecond2(parseInt(localStorage.getItem('second2')))
    }
    const resetTime = () =>{
        console.log('im reset')

        localStorage.setItem('minute1', "0");
        localStorage.setItem('minute2', defaultTime.toString());
        setMinute1(0)
        setMinute2(defaultTime)

        localStorage.setItem('second1', "0");
        localStorage.setItem('second2', "0");
        setSecond1(0)
        setSecond2(0)


    }



    useEffect(()=>{
        if (window.location.href.includes('thanks') || window.location.href.includes('finish')){
            setStart(false)
        } else {
            readTime()
            setStart(true)
        }
    },[])

    useEffect(()=>{
        setTimeout(() => {
            if (window.location.href.includes('Thanks')){
                setStart(false)
                resetTime()
                return;
            }

            if (start === false){
                return;
            }


            setCount(count+1)

            if (second2 > 0 ) {
                setSecond2(second2-1)
                saveTime()
                return
            }

            if (second1 > 0) {
                setSecond1(second1-1)
                setSecond2(9)
                saveTime()
                return
            }

            if (minute2 > 0) {
                setMinute2(minute2 - 1)
                setSecond1(5)
                setSecond2(9)
                saveTime()
                return
            }

            if (minute1 > 0) {
                setMinute1(minute1 - 1)
                setMinute2(9)
                setSecond1(5)
                setSecond2(9)
                saveTime()
                return
            }

            if (hour2 > 0) {
                setHour2(hour2 - 1)
                setMinute1(5)
                setMinute2(9)
                setSecond1(5)
                setSecond2(9)
                saveTime()
                return
            }

            if (hour1 > 0) {
                setHour1(hour1 - 1)
                setHour2(9)
                setMinute1(5)
                setMinute2(9)
                setSecond1(5)
                setSecond2(9)
                saveTime()
                return
            }

            saveTime()

            if (hour1 === 0 && hour2 === 0 && minute1 === 0 && minute2 === 0 && second1 === 0 && second2 === 0){
                setStart(false);
                window.location.href = '/finish'
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
