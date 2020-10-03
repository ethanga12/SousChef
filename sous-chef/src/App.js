import React from 'react';
import './App.css';
import Responsive from './components/Responsive';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
        <Sidebar width={300} height={"100vh"}>
          <h1>Nav Item</h1>
          <h1>Nav Item</h1>
          <h1>Nav Item</h1>
          <h1>Nav Item</h1>
          <h1>Nav Item</h1>
        </Sidebar>
      <Responsive />
    </div>
  );
}

export default App;
