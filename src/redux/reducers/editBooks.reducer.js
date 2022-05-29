const editBooks = (state = {}, action) => {
    if (action.type === 'SET_EDIT_BOOKS') {
      return action.payload;
    } else if (action.type === 'EDIT_GITHUB_USERNAME') {
      return (
        {
          ...state,
          github_name: action.payload,
        }
      )
    } else if (action.type === 'EDIT_CURRENT_STATUS') {
      return (
        {
          ...state,
          current_status: action.payload
        }
      )
    }
    return state;
  }

export default editBooks;