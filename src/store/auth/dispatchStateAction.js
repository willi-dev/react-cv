import { auth } from '../../services/firebase/firebase';

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
			auth.onAuthStateChanged( (authUser) => {
				if(authUser){
					// dispatch({ type: 'FETCH_USER_DATA_FULFILLED', payload: JSON.stringify(authUser) } );
					dispatch({ type: 'USER_SIGNIN' });
					if( localStorage.getItem('authUser') === null){
						localStorage.setItem('authUser', authUser );
					}
				}else{
					dispatch( { type: 'USER_SIGNOUT' } );
				}
			});
		},

		userSignOut: () => {
			// firebaseConfig.auth().signOut().then( function(){
			// 	dispatch( { type: 'USER_SIGNOUT'} );
			// 	localStorage.removeItem('authUser');
			// }, function(error){
			// 	console.log(error)
			// });
			
			dispatch( { type: 'USER_SIGNOUT'} );
		}

	}


}

export default dispatchStateToProps;
