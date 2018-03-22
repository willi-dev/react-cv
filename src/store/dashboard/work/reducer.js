const initialState = {
  work: [],
  fetching: false,
  fetched: false,
  error: null,
}

const reducer = ( state = initialState, action ) => {
  switch( action.type ) {
    
    case 'FETCH_WORK':{
      return {
        ...state,
        fetching: true,
      }
    }
    case 'FETCH_WORK_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        work: action.payload
      }
    }
    case 'FETCH_WORK_REJECTED': {
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
