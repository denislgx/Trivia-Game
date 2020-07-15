import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [people, setPeople] = useState('');

    useEffect(() => {
        fetch('/api/people')
            .then(res => res.json())
            .then(people => setPeople(people));
    }, []);

    console.log(people)
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>PEOPLE</h2>
                <ul>
                    {people && people.map(person => <h1>{person.name}</h1>)}
                </ul>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
        </a>
            </header>
        </div>
    );
}

export default App;
