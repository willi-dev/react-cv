import { firebaseConfig } from '../../services/firebase';

const dispatchStateToProps = dispatch => {
	return {
		fetchUserDAta: (email, password) => {
			console.log( 'login dispatch' );

			firebaseConfig.auth().signInWithEmailAndPassword( email, password )
	      .then( (firebaseUser) => {
	      	console.log(firebaseUser)
	      	dispatch({ type: 'FETCH_USER_DATA_FULFILLED', payload: firebaseUser } )
	      })
	      .catch( error => {
	        console.log( error );
	        dispatch( { type: 'FETCH_USER_DATA_REJECTED', payload: error } )
	      });

			// firebaseConfig.auth().onAuthStateChanged( (authUser) => {
			// 	authUser
			// 	? dispatch({ type: 'FETCH_USER_DATA_FULFILLED', payload: authUser })
			// 	: dispatch( { type: 'FETCH_USER_DATA_REJECTED', payload: {'user': null} } );
			// });
		}
	}
}

export default dispatchStateToProps;
