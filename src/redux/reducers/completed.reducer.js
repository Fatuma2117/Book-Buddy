const completedBooks = (state = [], action) => {
    switch (action.type) {
        case 'SET_COMPLETED_BOOKS':
            return action.payload;
        default:
            return state;
    }
};


export default completedBooks;