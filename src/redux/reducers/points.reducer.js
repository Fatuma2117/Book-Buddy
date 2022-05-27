const points = (state = [], action) => {
    switch (action.type) {
        case 'SET_POINTS':
            return action.payload;
        default:
            return state;
    }
};
export default points;