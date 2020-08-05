import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import he from "he";
import store from "../redux/store";
import "../styles/Trivia.scss";
import { loadState } from "../localStorage";


const Trivia = () => {
    const trivia = useSelector(state => state.trivia);
    const answers = useSelector(state => state.answers);
    const dispatch = useDispatch();




    // Fisher-Yates shuffle algorithm

    const shuffleArray = (array) => {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    const getRandomTrivia = () => {
        axios.get("https://opentdb.com/api.php?amount=1")
            .then(res => {
                console.log(res);
                dispatch({ type: "GET_RANDOM_TRIVIA", payload: res.data.results });
                let correct = he.decode(res.data.results[0]["correct_answer"]);
                let incorrect = res.data.results[0].incorrect_answers.map(each => he.decode(each));
                incorrect.push(correct);
                let allAnswersShuffled = shuffleArray(incorrect);
                dispatch({ type: "GET_ANSWERS", payload: allAnswersShuffled })
            })
            .then(() => console.log("el store", store.getState()))
            .catch(err => console.log(err));
    };

    useEffect(() => {
        if (localStorage.getItem("trivia")) {
            return
        } else {

            getRandomTrivia()
        }
    }, []);

    console.log("trivia", localStorage)

    return (
        <div className="trivia_wrapper">
            <div className="qa_wrapper">
                <div className="question_wrapper">
                    <div className="question">
                        {trivia && trivia[0] && he.decode(trivia[0].question)}
                    </div>
                </div>
                <div className="answer">
                    {trivia && trivia[0] && trivia[0].type === "boolean" ?
                        <>
                            <div className="boolean_ans">TRUE</div>
                            <div className="boolean_ans">FALSE</div>
                        </>
                        :
                        <>
                            {
                                answers && answers.map(each => {
                                    return <div className="option_ans">{each}</div>
                                })
                            }
                        </>}
                </div>
            </div>
            <div className="tools_wrapper">
                <div className="timer">TIMER</div>
                <div className="score">SCORE</div>
            </div>
        </div>
    );
};

export default Trivia;