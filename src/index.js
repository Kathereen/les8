import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes} from 'react-router-config';
import './index.css';
import {routesConf}  from './components/App/App';
import App from './components/App/App';
import { Router } from "react-router-dom";
import {createBrowserHistory} from 'history';

const history = createBrowserHistory()

  ReactDOM.render((
     <Router history={history}>
       <App/>
       {renderRoutes(routesConf)}
     </Router>
   ), document.getElementById('root')
);

