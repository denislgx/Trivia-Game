import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Trivia from "./components/Trivia";

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
            <Switch>
                <Route path="/trivia" component={Trivia} />
                <Route path="/" component={Main} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
