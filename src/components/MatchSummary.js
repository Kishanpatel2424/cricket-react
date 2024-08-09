import React, { useState } from 'react';
import '../styles/MatchSummary.css';
import Counter from './Counter';
import Over from '../classes/Over';

const MatchSummary = () => {
    const [lastTenBalls, setLastTenBalls] = useState([]);
    const [fallOfWickets, setFallOfWickets] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [currentWickets, setCurrentWickets] = useState(0);
    const [currentOver, setCurrentOver] = useState(0);
    const [overState, setOverState] = useState(new Over());

    const updateLastTenBalls = (run) => {
        if (run === 'UNDO') return; // Ignore UNDO action

        const newOverState = new Over();
        newOverState.balls = [...overState.balls];
        newOverState.validBalls = overState.validBalls;
        newOverState.addBall(run);

        setOverState(newOverState);

        // If the over is complete, increment the over count and reset the over state
        if (newOverState.isComplete()) {
            setCurrentOver(currentOver + 1);
            setOverState(new Over());
        }

        // Update last ten balls
        setLastTenBalls((prev) => {
            const newBalls = [...prev, run];
            if (newBalls.length > 10) {
                newBalls.shift(); // Keep only the last 10 balls
            }
            return newBalls;
        });

        // Update score and wickets
        if (run === 'W') {
            setCurrentWickets(currentWickets + 1);
            setFallOfWickets((prev) => [...prev, `${currentScore}-${currentWickets + 1}`]);
        } else if (!isNaN(run)) {
            setCurrentScore(currentScore + parseInt(run, 10));
        }
    };

    const resetMatch = () => {
        setLastTenBalls([]);
        setFallOfWickets([]);
        setCurrentScore(0);
        setCurrentWickets(0);
        setCurrentOver(0);
        setOverState(new Over());
    };

    const formatBallsByOver = (balls) => {
        let validBallCount = 0;
        const elements = [];

        balls.forEach((ball, index) => {
            if (validBallCount === 6) {
                elements.push(
                    <span key={`sep-${index}`} className="over-separator">•</span>
                );
                validBallCount = 0; // Reset valid ball count after the separator
            }

            if (!['WD', 'NB'].includes(ball)) {
                validBallCount += 1;
            }

            elements.push(
                <span key={index} className={`ball r${ball}`}>{ball}</span>
            );
        });

        return elements;
    };

    const renderFallOfWickets = () => {
        return <span>{fallOfWickets.join(', ')}</span>;
    };

    return (
        <div className="match-summary">
            <div className="scoreboard">
                <div className="team-container">
                    <div className="team">
                        <div className="team-name">Southington Lions</div>
                        <div className="team-score">{currentScore}/{currentWickets}</div>
                        <div className="team-overs">{currentOver}.{overState.validBalls}/8 Overs</div>
                    </div>
                    <div className="vs">VS</div>
                    <div className="team">
                        <div className="team-name">Guilford Gators</div>
                        <div className="team-score">65/4</div>
                    </div>
                </div>
            </div>

            <div className="last-ten-balls">
                {formatBallsByOver(lastTenBalls)}
            </div>

            <Counter onBallUpdate={updateLastTenBalls} onReset={resetMatch} />

            <div className="fall-of-wickets">
                Fall of Wickets: {renderFallOfWickets()}
            </div>
        </div>
    );
};

export default MatchSummary;
