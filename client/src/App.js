import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";

function App() {

    // CONNECTION TEST WITH BACKEND
    // const [people, setPeople] = useState('');

    // useEffect(() => {
    //     fetch('/api/people')
    //         .then(res => res.json())
    //         .then(people => setPeople(people));
    // }, []);

    // console.log(people)


    return (
        <div>
            <Navbar />
        </div>
    );
}

export default App;
