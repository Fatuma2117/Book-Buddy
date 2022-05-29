const editBook = (state = {}, action) => {
    if (action.type === 'SET_EDIT_BOOKS') {
      return action.payload;
    } else if (action.type === 'EDIT_TITLE') {
      return (
        {
          ...state,
          title: action.payload,
        }
      )
    } else if (action.type === 'EDIT_AUTHOR') {
      return (
        {
          ...state,
          author: action.payload
        }
      )
    }  else if (action.type === 'EDIT_DESCRIPTION') {
      return (
        {
          ...state,
          description: action.payload
        }
      )
    } else if (action.type === 'EDIT_PUBLISH_YEAR') {
      return (
        {
          ...state,
          publish_year: action.payload
        }
      )
    }else if (action.type === 'EDIT_IMAGE_URL') {
      return (
        {
          ...state,
          image_url: action.payload
        }
      )
    } else if (action.type === 'EDIT_TOTAL_PAGE') {
      return (
        {
          ...state,
          total_pages: action.payload
        }
      )
    }else if (action.type === 'EDIT_CURRENT_PAGE') {
      return (
        {
          ...state,
          current_page: action.payload
        }
      )
    }
    return state;
  }

export default editBook;