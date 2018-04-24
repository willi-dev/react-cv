const initialState = {
  publication: [],
  fetching: false,
  fetched: false,
  error: null,
}

const reducer = ( state = initialState, action ) => {
  switch( action.type ) {
    
    case 'FETCH_PUBLICATION':{
      return {
        ...state,
        fetching: true,
      }
    }
    case 'FETCH_PUBLICATION_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        publication: action.payload
      }
    }
    case 'FETCH_PUBLICATION_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    
    case 'ADD_PUBLICATION_SUCCESS': {
      return {
        ...state,
      }
    }

    case 'ADD_PUBLICATION_ERROR': {
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
