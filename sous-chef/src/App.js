import React from 'react';
import './App.css';
import Responsive from './components/Responsive';
import Sidebar from './components/Sidebar';
import CalendarDate from './components/CalendarDate';

function App() {
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
    </div>
  );
}

export default App;
