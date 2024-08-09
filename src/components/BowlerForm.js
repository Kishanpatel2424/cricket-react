import React, { useState } from 'react';

const BowlerForm = ({ addBowler }) => {
    const [bowler, setBowler] = useState({ name: '', overs: 0, maidens: 0, runs: 0, wickets: 0 });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBowler(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBowler(bowler);
        setBowler({ name: '', overs: 0, maidens: 0, runs: 0, wickets: 0 });
    };

    return (
        <div className="bowler-form">
            <h3>Add Bowler</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={bowler.name} onChange={handleChange} />
                <input type="number" name="overs" placeholder="Overs" value={bowler.overs} onChange={handleChange} />
                <input type="number" name="maidens" placeholder="Maidens" value={bowler.maidens} onChange={handleChange} />
                <input type="number" name="runs" placeholder="Runs" value={bowler.runs} onChange={handleChange} />
                <input type="number" name="wickets" placeholder="Wickets" value={bowler.wickets} onChange={handleChange} />
                <button type="submit">Add Bowler</button>
            </form>
        </div>
    );
};

export default BowlerForm;
