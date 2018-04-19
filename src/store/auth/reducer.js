const initialState = {
	user: [],
	isAuth: false,
	error: null,
	error_message: null,
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
				user: action.payload,
				error: null,
				error_message: null,
			}
		}
		case 'FETCH_USER_DATA_REJECTED': {
			return {
				...state,
				fetching: false,
				error: action.payload.code,
				error_message: action.payload.message
			}
		}
		case 'USER_SIGNIN':{
			return {
				...state,
				isAuth: true,
			}
		}
		case 'USER_SIGNOUT': {
			return {
				...state,
				user: [],
				error: null,
				error_message: null
			}
		}
		default: {
			return state;
		}
	}
}

export default reducer;
