import axios from "axios";
import { useDispatch } from "react-redux";


// export const getRandomTrivia = () => {
//     const dispatch = useDispatch();
//     axios.get("https://opentdb.com/api.php?amount=10")
//         .then(res => {
//             console.log(res);
//             dispatch({ type: "GET_RANDOM_TRIVIA", payload: res.data.results });
//         })
// };