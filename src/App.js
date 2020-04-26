import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User/User'

const App = () => {
  return (
    <div className="App">
      <User userName="Chi"/>
      <User userName="Khanh"/>
    </div>
  );
}

export default App;
