export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("trivia");
        if (serializedState === null) {
            return undefined;
        };
        return JSON.parse(serializedState);
    } catch (err) {
        console.log(err);
        return undefined;
    };
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("trivia", serializedState);
    } catch (err) {
        console.log(err);
    };
};