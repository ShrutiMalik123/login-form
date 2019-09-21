import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <header className="App-header1">
      <div className="card">
      <UserForm/>
    </div>
    <h4>Already a member? <Link to='/login'>Sign in</Link></h4>
      </header>
    
    </div>
  );
}

export default App;
