import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import SignUpPage from './components/SignUp';

function App() {
  
  return (
    <Router>
      <SignUpPage/>
    </Router>
    
  //   <Router>
  //   <div>
  //     <Navigation />
 
  //     <hr />
 
  //     <Route path={ROUTES.SIGNUP} component={SignUpPage} />
  //   </div>
  // </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Posts />
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
