import { firebaseConfig } from '../../services/firebase';

const dispatchStateToProps = dispatch => {
	return {
		fetchUserData: (firebaseUser) => {
			console.log( 'login dispatch' );
			dispatch({ type: 'FETCH_USER_DATA_FULFILLED', payload: JSON.stringify(firebaseUser) } );
			/*firebaseConfig.auth().signInWithEmailAndPassword( email, password )
	      .then( (firebaseUser) => {
	      	dispatch({ type: 'FETCH_USER_DATA_FULFILLED', payload: JSON.stringify(firebaseUser) } );
	      	localStorage.setItem('authUser', JSON.stringify(firebaseUser) );
	      	console.log( JSON.parse(localStorage.getItem('authUser')) );
	      })
	      .catch( error => {
	        console.log( error );
	        dispatch( { type: 'FETCH_USER_DATA_REJECTED', payload: JSON.stringify(error) } );
	      });*/
		},
		fetchUserDataReject: (error) => {
			dispatch( { type: 'FETCH_USER_DATA_REJECTED', payload: error } );
		},

		userSignIn: () => {
			firebaseConfig.auth().onAuthStateChanged( (authUser) => {
				if(authUser){
					dispatch({ type: 'FETCH_USER_DATA_FULFILLED', payload: JSON.stringify(authUser) } );
					dispatch({ type: 'USER_SIGNIN' });
					if( localStorage.getItem('authUser') === null){
						localStorage.setItem('authUser', JSON.stringify(authUser) );
					}
				}else{
					dispatch( { type: 'USER_SIGNOUT' } );
				}
			});
		},

		userSignOut: () => {
			console.log( 'logout dispatch' );
			firebaseConfig.auth().signOut();
			dispatch( { type: 'USER_SIGNOUT'} );
			localStorage.removeItem('authUser');
			localStorage.removeItem('datauser');
		}

	}


}

export default dispatchStateToProps;
