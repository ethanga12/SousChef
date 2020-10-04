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
    <Router>
      <Route path={ROUTES.SIGNIN} component={SignInPage} />
      <Route path={ROUTES.SIGNUP} component={SignUpPage} />
      <Route path={ROUTES.HOME} component={Homepage} />
      <Redirect from="/" to="/signin" />
    </Router>
    // <div className="App">
    //   <div id="cal-sidebar">
    //     <Sidebar width={100} height={"100vh"}>
    //       <CalendarDate date="10" />
    //       <CalendarDate date="11" />
    //       <CalendarDate date="12" />
    //       <CalendarDate date="13" />
    //       <CalendarDate date="14" />
    //       <CalendarDate date="15" />
    //       <CalendarDate date="16" />
    //     </Sidebar>
    //   </div>
    //   <div id="app-content">
    //     <Responsive />
    //     <Responsive />
    //     <Responsive />
    //   </div>
    // </div>
  );
}

export default App;
