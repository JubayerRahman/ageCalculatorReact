import React from 'react';
import './App.css';
import MainField from './Components/MainField/MainField';
import Developer from './Components/Developer/Developer';
import ChatGpt from './Components/ChatGpt';

function App() {
  return (
    <div className='App-header'>
    <MainField/>
    <Developer/>
    </div>
  );
}

export default App;
