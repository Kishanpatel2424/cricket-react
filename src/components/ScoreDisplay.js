import React from 'react';

const ScoreDisplay = ({ matchData }) => {
    return (
        <div className="score-display">
            <h3>Match Details</h3>
            <div>
                <strong>Competition:</strong> {matchData.competition}
            </div>
            <div>
                <strong>Match Against:</strong> {matchData.matchAgainst}
            </div>
            <div>
                <strong>Date:</strong> {matchData.date}
            </div>
            <div>
                <strong>Toss Won By:</strong> {matchData.tossWonBy}
            </div>
            <div>
                <strong>Elected To:</strong> {matchData.electedTo}
            </div>
            <div>
                <strong>Team 1:</strong> {matchData.team1}
            </div>
            <div>
                <strong>Team 2:</strong> {matchData.team2}
            </div>

            <h3>Batsmen</h3>
            <ul>
                {matchData.batsmen.map((batsman, index) => (
                    <li key={index}>
                        {batsman.name} - Runs: {batsman.runs}, Balls Faced: {batsman.ballsFaced}, How Out: {batsman.howOut}, Fielder: {batsman.fielder}, Bowler: {batsman.bowler}
                    </li>
                ))}
            </ul>

            <h3>Bowlers</h3>
            <ul>
                {matchData.bowlers.map((bowler, index) => (
                    <li key={index}>
                        {bowler.name} - Overs: {bowler.overs}, Maidens: {bowler.maidens}, Runs: {bowler.runs}, Wickets: {bowler.wickets}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ScoreDisplay;
