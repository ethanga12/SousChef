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

function App() {
  
  return (
    <div className="App">
      <div id="cal-sidebar">
        <Sidebar width={100}>
          <CalendarDate key="35" date="10" />
          <CalendarDate key="36" date="11" />
          <CalendarDate key="30" date="12" />
          <CalendarDate key="39" date="13" />
          <CalendarDate key="41" date="14" />
          <CalendarDate key="42" date="15" />
          <CalendarDate key="45" date="16" />
        </Sidebar>
      </div>
      <div id="app-content" >
        <Responsive  key="47" />
        <Responsive key="48" />
        <Responsive key="49" />
      </div>
      <Router>
      <Route path={ROUTES.SIGNIN} component={SignInPage} />
      <Route path={ROUTES.SIGNUP} component={SignUpPage} />
      <Route path={ROUTES.HOME} component={Homepage} />
      <Redirect from="/" to="/signin" />
    </Router>
    </div>
  );
}

export default App;
