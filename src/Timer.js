import { useState, useRef, useEffect } from "react";

function Timer() {
    const [time, setTime] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        startTimer();
        return stopTimer;
    }, []);

    function startTimer() {
        intervalRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);
    }

    function stopTimer() {
        clearInterval(intervalRef.current);
    }

    const formattedTime = new Date(time * 1000).toISOString().substr(14, 5);

    return <div className="timer">{formattedTime}</div>;
}

export default Timer;
