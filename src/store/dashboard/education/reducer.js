const initialState = {
  education: [],
  fetching: false,
  fetched: false,
  error: null,
}

const reducer = ( state = initialState, action ) => {
  switch( action.type ) {
    
    case 'FETCH_EDU':{
      return {
        ...state,
        fetching: true,
      }
    }
    case 'FETCH_EDU_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        education: action.payload
      }
    }
    case 'FETCH_EDU_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case 'ADD_EDU_SUCCESS': {
      return {
        ...state,
      }
    }
    case 'ADD_EDU_ERROR': {
      return {
        ...state,
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;
