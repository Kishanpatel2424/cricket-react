import React from 'react';

const MatchInfo = ({ matchData, setMatchData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setMatchData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="match-info">
            <h3>Match Information</h3>
            <form>
                <input type="text" name="competition" placeholder="Competition" value={matchData.competition} onChange={handleChange} />
                <input type="text" name="matchAgainst" placeholder="Match Against" value={matchData.matchAgainst} onChange={handleChange} />
                <input type="date" name="date" value={matchData.date} onChange={handleChange} />
                <input type="text" name="tossWonBy" placeholder="Toss Won By" value={matchData.tossWonBy} onChange={handleChange} />
                <input type="text" name="electedTo" placeholder="Elected To" value={matchData.electedTo} onChange={handleChange} />
                <input type="text" name="team1" placeholder="Team 1" value={matchData.team1} onChange={handleChange} />
                <input type="text" name="team2" placeholder="Team 2" value={matchData.team2} onChange={handleChange} />
            </form>
        </div>
    );
};

export default MatchInfo;
