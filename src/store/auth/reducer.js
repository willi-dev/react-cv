const initialState = {
	user: [],
	error: null,
	fetching: false,
	fetched: false,
}

const reducer = (state = initialState, action) => {
	switch( action.type ) {

		case 'FETCH_USER_DATA': {
			return {
				...state,
				fetching: true,
			}
		}

		case 'FETCH_USER_DATA_FULFILLED': {
			return {
				...state,
				fetching: false,
				fetched: true,
				user: action.payload
			}
		}

		case 'FETCH_USER_DATA_REJECTED': {
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
