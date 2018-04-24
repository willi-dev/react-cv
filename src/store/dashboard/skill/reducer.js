const initialState = {
  skill: [],
  fetching: false, 
  fetched: false,
  error: null,
}

const reducer = ( state = initialState, action ) => {
  switch( action.type ) {

    case 'FETCH_SKILL':{
      return {
        ...state,
        fetching: true,
      }
    }
    case 'FETCH_SKILL_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        skill: action.payload
      }
    }
    case 'FETCH_SKILL_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case 'ADD_SKILL_SUCCESS': {
      return {
        ...state,
      }
    }
    case 'ADD_SKILL_ERROR': {
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
