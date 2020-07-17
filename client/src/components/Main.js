import React, { useState, useEffect } from 'react';
import "../styles/Main.scss";
// import { getRandomTrivia } from "../redux/actions/trivia"
import { useDispatch } from "react-redux";
import axios from "axios";
import store from "../redux/store"

const Main = () => {
    const [start, setStart] = useState(false);
    const dispatch = useDispatch();


    const getRandomTrivia = () => {
        axios.get("https://opentdb.com/api.php?amount=10")
            .then(res => {
                console.log(res);
                dispatch({ type: "GET_RANDOM_TRIVIA", payload: res.data.results });
            })
            .then(() => console.log("el store", store.getState(), typeof store.getState()));
    };

    useEffect(() => {
        getRandomTrivia()
    }, [start]);

    return (
        <div className="main_wrapper">
            {!start && (
                <>
                    <div className="header_wrapper">
                        <header className="header">
                            <div className="text">
                                Welcome to Trivia-Game! You can enjoy a 10 questions random trivia, but if you register you will
                                be able to choose the difficulty, question's categories, multiple-choice or true or false trivia type,
                                and also save in your profile the questions you've already answer correctly to keep track of your knowledge!
                                Enjoy!
                            </div>
                        </header>
                        <img src="qa.svg" className="question_img" alt="qa" />
                    </div>
                    <div className="start_btn_wrapper">
                        <div onClick={() => setStart(true)} className="start_btn">START</div>
                    </div>
                </>
            )
            }
            {start && (
                <div>
                    hola
                </div>
            )}
        </div>
    );
};

export default Main;