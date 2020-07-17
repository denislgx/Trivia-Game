import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

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
        <div className="app_wrapper">
            <Navbar />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
