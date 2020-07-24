const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_ANSWERS":
            return [...action.payload];
        default:
            return state;
    };
};