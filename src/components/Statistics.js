import React from 'react';
import '../styles/Statistics.css';

const Statistics = () => {
    return (
        <div className="statistics">
            <h3>Statistics</h3>
            <div className="batting-stats">
                <h4>Batting Stats</h4>
                <div className="players">
                    <div className="player">
                        {/* <img src="/path/to/player1.png" alt="Player 1" /> */}
                        <div>Rahul Tewatia</div>
                        <div>Runs: 58(20)</div>
                        <div>Strike Rate: 180.5</div>
                    </div>
                    <div className="player">
                        {/* <img src="/path/to/player2.png" alt="Player 2" /> */}
                        <div>Sanju Samson</div>
                        <div>Runs: 89(26)</div>
                        <div>Strike Rate: 200</div>
                    </div>
                </div>
            </div>
            <div className="bowling-stats">
                <h4>Bowling Stats</h4>
                <div className="player">
                    {/* <img src="/path/to/bowler.png" alt="Bowler" /> */}
                    <div>Jasprit Bumrah</div>
                    <div>Speed: 142kph</div>
                    <div>Innings: 148</div>
                    <div>Wickets: 4</div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
