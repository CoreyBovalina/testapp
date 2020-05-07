import React from 'react';
import logo from './Assets/logo.png';
import './App.css';
import Input from './Components/Input'
function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"  />
        <br/>
        
        <Input/>
      </header>
    </div>
  );
}

export default App;
