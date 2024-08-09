import React, { useState } from 'react';
import '../styles/Counter.css';

const Counter = ({ onBallUpdate }) => {
    const handleButtonClick = (run) => {
        onBallUpdate(run);
    };

    return (
        <div className="counter">
            <div className="quick-advanced-toggle">
                <button className="toggle-button active">Quick</button>
                <button className="toggle-button">Advanced</button>
            </div>
            <div className="runs-grid">
                {[0, 1, 2, 3, 4, 6].map((run) => (
                    <button key={run} onClick={() => handleButtonClick(run)} className="run-button">
                        {run}
                    </button>
                ))}
            </div>
            <div className="actions-grid">
                <button onClick={() => handleButtonClick('W')} className="action-button">WICKET</button>
                <button onClick={() => handleButtonClick('WD')} className="action-button">WD</button>
                <button onClick={() => handleButtonClick('NB')} className="action-button">NB</button>
            </div>
        </div>
    );
};

export default Counter;
