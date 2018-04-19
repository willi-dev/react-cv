import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Login from './components/login/Login';
import Logout from './components/login/Logout';
import Dashboard from './components/dashboard/Dashboard';
import registerServiceWorker from './registerServiceWorker';
import {isAuthenticated} from './services/firebase/auth';

/* 
 * Custom DashboardRoute
 */
const DashboardRoute = ( { component: Component, ...rest }) =>(
  <Route {...rest} render={(props) => (
    isAuthenticated() 
    ? <Component {...props} />
    : <Redirect to='/login' />
  )} />
)

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <DashboardRoute path="/dashboard" component={Dashboard}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  , 
  document.getElementById('root'));
registerServiceWorker();

