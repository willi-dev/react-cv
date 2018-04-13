import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  , 
  document.getElementById('root'));
registerServiceWorker();
