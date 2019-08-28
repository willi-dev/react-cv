import { applyMiddleware, createStore } from 'redux';
// import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducers from './reducers';
// import logger from 'redux-logger';	
// if( process.env.NODE_ENV === 'development' ){
// 	const middleware = applyMiddleware( thunk, logger );
// }
const middleware = applyMiddleware( thunk );

export default createStore( reducers, middleware );
