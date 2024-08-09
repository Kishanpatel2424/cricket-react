import React, { useState } from 'react';

const BatsmanForm = ({ addBatsman }) => {
    const [batsman, setBatsman] = useState({ name: '', runs: 0, ballsFaced: 0, howOut: '', fielder: '', bowler: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBatsman(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBatsman(batsman);
        setBatsman({ name: '', runs: 0, ballsFaced: 0, howOut: '', fielder: '', bowler: '' });
    };

    return (
        <div className="batsman-form">
            <h3>Add Batsman</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={batsman.name} onChange={handleChange} />
                <input type="number" name="runs" placeholder="Runs" value={batsman.runs} onChange={handleChange} />
                <input type="number" name="ballsFaced" placeholder="Balls Faced" value={batsman.ballsFaced} onChange={handleChange} />
                <input type="text" name="howOut" placeholder="How Out" value={batsman.howOut} onChange={handleChange} />
                <input type="text" name="fielder" placeholder="Fielder" value={batsman.fielder} onChange={handleChange} />
                <input type="text" name="bowler" placeholder="Bowler" value={batsman.bowler} onChange={handleChange} />
                <button type="submit">Add Batsman</button>
            </form>
        </div>
    );
};

export default BatsmanForm;
