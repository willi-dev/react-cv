const initialState = {
  training: [],
  fecthing: false,
  fetched:false,
  error: null,
}

const reducer = ( state = initialState, action ) => {
  switch( action.type ) {
    
    case 'FETCH_TRAINING':{
      return {
        ...state,
        fetching: true,
      }
    }
    case 'FETCH_TRAINING_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        training: action.payload
      }
    }
    case 'FETCH_TRAINING_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case 'ADD_TRAINING_SUCCESS': {
      return {
        ...state,
      }
    }
    case 'ADD_TRAINING_ERROR': {
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
