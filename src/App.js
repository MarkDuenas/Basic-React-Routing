import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import Hello from './components/Hello';
import HellWithBg from './components/HellWithBg';


function App() {
  return (
    <div className="App">
      <Router>
        <Home path = "/home"/>
        <Hello path= "/:wordOrNum" />
        <HellWithBg path ="/:word/:color/:bg" />
      </Router>
      
    </div>
  );
}

export default App;
