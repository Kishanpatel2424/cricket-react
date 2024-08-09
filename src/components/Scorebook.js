import React, { useState } from 'react';
import MatchInfo from './MatchInfo';
import BatsmanForm from './BatsmanForm';
import BowlerForm from './BowlerForm';
import ScoreDisplay from './ScoreDisplay';
import '../styles/Scorebook.css';

const Scorebook = () => {
    const [matchData, setMatchData] = useState({
        competition: '',
        matchAgainst: '',
        date: '',
        tossWonBy: '',
        electedTo: '',
        team1: '',
        team2: '',
        batsmen: [],
        bowlers: []
    });

    const addBatsman = (batsman) => {
        setMatchData(prevState => ({
            ...prevState,
            batsmen: [...prevState.batsmen, batsman]
        }));
    };

    const addBowler = (bowler) => {
        setMatchData(prevState => ({
            ...prevState,
            bowlers: [...prevState.bowlers, bowler]
        }));
    };

    return (
        <div className="scorebook">
            <MatchInfo matchData={matchData} setMatchData={setMatchData} />
            <BatsmanForm addBatsman={addBatsman} />
            <BowlerForm addBowler={addBowler} />
            <ScoreDisplay matchData={matchData} />
        </div>
    );
};

export default Scorebook;
