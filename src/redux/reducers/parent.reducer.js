const parentBooks = (state = [], action) => {
    switch (action.type) {
        case 'SET_PARENT_BOOKS':
            return action.payload;
        default:
            return state;
    }
};
export default parentBooks;