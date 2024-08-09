import React from 'react';
import Header from './components/Header';
import MatchSummary from './components/MatchSummary';
import Statistics from './components/Statistics';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <MatchSummary />
            <Statistics />
        </div>
    );
}

export default App;
