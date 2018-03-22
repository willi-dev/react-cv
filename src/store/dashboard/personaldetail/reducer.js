const initialState = {
  personaldetail: [],
  fetching: false,
  fetched: false,
  error: null,
}

const reducer = ( state = initialState, action ) => {
  switch( action.type ) {
    
    case 'FETCH_PERSONAL':{
      return {
        ...state,
        fetching: true,
      }
    }
    case 'FETCH_PERSONAL_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        education: action.payload
      }
    }
    case 'FETCH_PERSONAL_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }

    default: {
      return state;
    }
  }
}

export default reducer;
