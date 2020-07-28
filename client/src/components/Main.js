import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/Main.scss";
import Trivia from "./Trivia";

const Main = () => {
    const [start, setStart] = useState(false);

    return (
        <>
            {!start && (
                <div className="main_wrapper">

                    <div className="header_wrapper">
                        <header className="header">
                            <div className="text">
                                Welcome to Trivia-Game! You can enjoy a 10 questions random trivia, but if you register you will
                                be able to choose the difficulty, question's categories, multiple-choice or true or false trivia type,
                                and also save in your profile the questions you've already answered correctly to keep track of your knowledge!
                                Enjoy!
                            </div>
                        </header>
                        <img src="qa.svg" className="question_img" alt="qa" />
                    </div>
                    <div className="start_btn_wrapper">
                        <Link to="/trivia" style={{ textDecoration: "none" }}>
                            <div onClick={() => setStart(true)} className="start_btn">START</div>
                        </Link>
                    </div>

                </div>
            )
            }
            {
                start && (
                    <Trivia />
                )
            }
        </>
    );
};

export default Main;