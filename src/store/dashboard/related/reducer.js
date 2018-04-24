const initialState = {
  related: [],
  fetching: false,
  fetched: false,
  error: null,
}

const reducer = ( state = initialState, action ) => {
  switch( action.type ) {

    case 'FETCH_RELATED':{
      return {
        ...state,
        fetching: true,
      }
    }
    case 'FETCH_RELATED_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        related: action.payload
      }
    }
    case 'FETCH_RELATED_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case 'ADD_RELATED_SUCCESS': {
      return {
        ...state,
      }
    }
    case 'ADD_RELATED_ERROR': {
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
