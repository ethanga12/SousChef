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
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './components/dropzone'
import Vision from './components/receiptReader'

function App() {

  return (
    <div className="App">
      <div id="cal-sidebar">
      </div>
        <Container>
          <Row>
            <Col sm={2} lg={2} md={2} xs={2}>
            <Sidebar width={100}>
          <CalendarDate key="35" date="10" />
          <CalendarDate key="36" date="11" />
          <CalendarDate key="30" date="12" />
          <CalendarDate key="39" date="13" />
          <CalendarDate key="41" date="14" />
          <CalendarDate key="42" date="15" />
          <CalendarDate key="45" date="16" />
         </Sidebar>
        </Col>
        <Col sm={10} lg={10} md={10} xs={10}>
          <Tabs defaultActiveKey="planner">
            <Tab className="nav-tabs" eventKey="planner" title="Planner">
              <div id="app-content" >
          <Responsive  key="47" />
          <Responsive key="48" />
          <Responsive key="49" />
        </div>
            </Tab>
            <Tab className="nav-tabs" eventKey="cv-upload" title="Upload Receipt">

              <ContactForm/>
              <Vision/>
            </Tab>
            <Tab className="nav-tabs" eventKey="sign-in" title="Sign In">
            <div id="fbase-router">
      <Router>
      <Route path={ROUTES.SIGNIN} component={SignInPage} />
      <Route path={ROUTES.SIGNUP} component={SignUpPage} />
      <Route path={ROUTES.HOME} component={Homepage} />
      <Redirect from="/" to="/signin" />
    </Router>
    // <div className="App">
    //   <div id="cal-sidebar">
    //   </div>
    //   <Container>
    //     <Row>
    //       <Col sm={2} lg={2} md={2} xs={2}>
    //         <Sidebar width={100}>
    //           <CalendarDate key="35" date="10" />
    //           <CalendarDate key="36" date="11" />
    //           <CalendarDate key="30" date="12" />
    //           <CalendarDate key="39" date="13" />
    //           <CalendarDate key="41" date="14" />
    //           <CalendarDate key="42" date="15" />
    //           <CalendarDate key="45" date="16" />
    //         </Sidebar>
    //       </Col>
    //       <Col sm={10} lg={10} md={10} xs={10}>
    //         <Tabs defaultActiveKey="planner">
    //           <Tab className="nav-tabs" eventKey="planner" title="Planner">
    //             <div id="app-content" >
    //               <Responsive key="47" />
    //               <Responsive key="48" />
    //               <Responsive key="49" />
    //             </div>
    //           </Tab>
    //           <Tab className="nav-tabs" eventKey="cv-upload" title="Upload Receipt">
    //           </Tab>
    //           <Tab className="nav-tabs" eventKey="sign-in" title="Sign In">
    //             <div id="fbase-router">
    //               <Router>
    //                 <Route path={ROUTES.SIGNIN} component={SignInPage} />
    //                 <Route path={ROUTES.SIGNUP} component={SignUpPage} />
    //                 <Route path={ROUTES.HOME} component={Homepage} />
    //                 <Redirect from="/" to="/signin" />
    //               </Router>
    //             </div>
    //           </Tab>
    //         </Tabs>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
  );
}

export default App;
