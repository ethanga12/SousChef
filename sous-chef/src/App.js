import React from 'react';
import './App.css';
import Responsive from './components/Responsive';
import Sidebar from './components/Sidebar';
import CalendarDate from './components/CalendarDate';

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
    </div>
  );
}

export default App;
