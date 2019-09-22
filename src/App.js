import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import { Link } from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <div className="App">
    
    <AppRouter />
    </div>
  );
}

export default App;
