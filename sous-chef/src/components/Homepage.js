import React, { Component } from "react";
import Responsive from './Responsive';
import Sidebar from './Sidebar';
import CalendarDate from './CalendarDate';
import { Container, Row, Col, Tabs, Tab} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Homepage extends Component {
    render() {
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
                  <Responsive key="47" />
                  <Responsive key="48" />
                  <Responsive key="49" />
                </div>
              </Tab>
              <Tab className="nav-tabs" eventKey="cv-upload" title="Upload Receipt">
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
    // <div className="App">
    //   <div id="cal-sidebar">
    //   </div>
    //     <Container>
    //       <Row>
    //         <Col sm={2} lg={2} md={2} xs={2}>    
    //         <Sidebar width={100}>
    //       <CalendarDate key="35" date="10" />
    //       <CalendarDate key="36" date="11" />
    //       <CalendarDate key="30" date="12" />
    //       <CalendarDate key="39" date="13" />
    //       <CalendarDate key="41" date="14" />
    //       <CalendarDate key="42" date="15" />
    //       <CalendarDate key="45" date="16" />
    //      </Sidebar>
    //     </Col>
    //     <Col sm={10} lg={10} md={10} xs={10}>
    //       <Tabs defaultActiveKey="planner">
    //         <Tab className="nav-tabs" eventKey="planner" title="Planner">
    //           <div id="app-content" >
    //       <Responsive  key="47" />
    //       <Responsive key="48" />
    //       <Responsive key="49" />
    //     </div>
    //         </Tab>
    //         <Tab className="nav-tabs" eventKey="cv-upload" title="Upload Receipt">

    //         </Tab>
    //         {/* <Tab className="nav-tabs" eventKey="sign-in" title="Sign In"> */}
    //         <div id="fbase-router">
      
    //     </div>
    //         {/* </Tab> */}
    //       </Tabs>
    //     </Col>
    //       </Row>
    //       </Container>
    // </div>
        // <div className="App">
        //     <div id="cal-sidebar">
        //         <Sidebar width={100} height={"100vh"}>
        //         <CalendarDate date="10" />
        //         <CalendarDate date="11" />
        //         <CalendarDate date="12" />
        //         <CalendarDate date="13" />
        //         <CalendarDate date="14" />
        //         <CalendarDate date="15" />
        //         <CalendarDate date="16" />
        //         </Sidebar>
        //     </div>
        //     <div id="app-content">
        //         <Responsive />
        //         <Responsive />
        //         <Responsive />
        //     </div>
        // </div>
        );
    }
}