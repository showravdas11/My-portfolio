import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import React from 'react';
import { Lines } from 'react-preloaders';

function App() {
  return (
    <div>
      <Home></Home>
    </div>
  );
}

export default App;
