const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_RANDOM_TRIVIA":
            return [...action.payload]
        default:
            return initialState;
    }
}