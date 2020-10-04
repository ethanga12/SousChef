import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import Homepage from './components/Homepage';
import Sidebar from './components/Sidebar';
import CalendarDate from './components/CalendarDate';
import Responsive from './components/Responsive';
import { Container, Row, Col, Tabs, Tab} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <Router>
      <Route path={ROUTES.SIGNIN} component={SignInPage} />
      <Route path={ROUTES.SIGNUP} component={SignUpPage} />
      <Route path={ROUTES.HOME} component={Homepage} />
      <Redirect from="/" to="/signin" />
    </Router>
  );
}

export default App;
