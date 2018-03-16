import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
import './index.css'; 
import 'bootstrap/dist/css/bootstrap.css';

// import * as reducers from './store/reducers';

import App from './App';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import registerServiceWorker from './registerServiceWorker';

// const store = createStore( combineReducers(reducers), applyMiddleware(thunk));

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  , 
  document.getElementById('root'));
registerServiceWorker();
