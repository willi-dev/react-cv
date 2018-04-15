import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import registerServiceWorker from './registerServiceWorker';

let isAuth = localStorage.getItem('authUser');

const AuthRoute = ( { component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuth != null
    ? <Component {...props} />
    : <Redirect to='/login' />
  )} />
)

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/login" component={Login} />
          <AuthRoute path="/dashboard" component={Dashboard}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  , 
  document.getElementById('root'));
registerServiceWorker();
