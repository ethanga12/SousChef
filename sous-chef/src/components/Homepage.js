import React, { Component } from "react";
import Responsive from './Responsive';
import Sidebar from './Sidebar';
import CalendarDate from './CalendarDate';

export default class Homepage extends Component {
    render() {
        document.body.style = 'background: white'
        return (
        <div className="App">
            <div id="cal-sidebar">
                <Sidebar width={100} height={"100vh"}>
                <CalendarDate date="10" />
                <CalendarDate date="11" />
                <CalendarDate date="12" />
                <CalendarDate date="13" />
                <CalendarDate date="14" />
                <CalendarDate date="15" />
                <CalendarDate date="16" />
                </Sidebar>
            </div>
            <div id="app-content">
                <Responsive />
                <Responsive />
                <Responsive />
            </div>
        </div>);
    }
}