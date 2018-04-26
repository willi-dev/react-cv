const initialState = {
  mainprofile: [],
  fetching: false,
  fetched: false,
  error: null,
}

const reducer = ( state = initialState, action ) => {
  switch( action.type ) {
    
    case 'FETCH_MAIN':{
      return {
        ...state,
        fetching: true,
      }
    }
    case 'FETCH_MAIN_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        mainprofile: action.payload
      }
    }
    case 'FETCH_MAIN_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case 'ADD_MAIN_SUCCESS': {
      return {
        ...state
      }
    }
    case 'ADD_MAIN_ERROR': {
      return {
        ...state
      }
    }
    case 'EDIT_MAIN_PROFILE': {
      return {
        ...state
      }
    }
    case 'CANCEL_EDIT_MAIN_PROFILE': {
      return {
        ...state
      }
    }

    default: {
      return state;
    }
  }
}

export default reducer;
