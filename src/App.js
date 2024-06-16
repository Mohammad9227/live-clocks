import React, { useEffect, useState } from 'react';
import './App.css';

const Clock = ({ label, timeZone }) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { timeZone }));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString('en-US', { timeZone }));
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timeZone]);

    return (
        <div className="clock">
            <h2>{label}</h2>
            <div>{time}</div>
        </div>
    );
};

function App() {
    return (
        <div className="App">
            <Clock label="PST Time" timeZone="America/Los_Angeles" />
            <Clock label="India Time" timeZone="Asia/Kolkata" />
            <Clock label="UTC Time" timeZone="UTC" />
        </div>
    );
}

export default App;
