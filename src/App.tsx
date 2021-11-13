import React from 'react';
import './App.css';
import NytApp from './components/nytApp';
require('dotenv').config();

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
        <h1>New York Times</h1>
        <div><NytApp /></div>
        <hr/>
        <div>Results:</div>
    </div>
  );
}

export default App;
