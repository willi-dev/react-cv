const initialState = {
  project: [],
  fetching: false,
  fetched: false,
  error: null,
}

const reducer = ( state = initialState, action ) => {
  switch( action.type ) {
    
    case 'FETCH_PROJECT':{
      return {
        ...state,
        fetching: true,
      }
    }
    case 'FETCH_PROJECT_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        project: action.payload
      }
    }
    case 'FETCH_PROJECT_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case 'ADD_PROJECT_SUCCESS': {
      return {
        ...state,
      }
    }
    case 'ADD_PROJECT_ERROR': {
      return {
        ...state,
        error: action.payload
      }
    }
    case 'DELETE_PROJECT_SUCCESS': {
      return {
        ...state
      }
    }
    case 'DELETE_PROJECT_ERROR': {
      return {
        ...state,
        error: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;
