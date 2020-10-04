import React, { Component } from "react";

export default class CalendarDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: props.date
        }
    }
    render() {
    return (<div className="calendarDateContainer"><h1 className="calendarDate">{this.state.date}</h1></div>);
    }
}