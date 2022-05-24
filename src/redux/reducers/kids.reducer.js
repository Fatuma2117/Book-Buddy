const kids = (state = [], action) => {
    switch (action.type) {
        case 'SET_KIDS':
            return action.payload;
        default:
            return state;
    }
}

export default kids;