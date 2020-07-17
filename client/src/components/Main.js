import React, { useState } from 'react';
import "../styles/Main.scss";

const Main = () => {
    const [start, setStart] = useState(false);
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
                        <img src="qa.svg" className="question_img" />
                    </div>
                    <div className="start_btn_wrapper">
                        <div onClick={() => setStart(true)} className="start_btn">START</div>
                    </div>
                </>
            )
            }

        </div>
    );
};

export default Main;