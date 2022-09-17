import Pomodoro from './components/Pomodoro.js';
import Todolist from './components/Todolist.js';
import React from 'react'
import './App.css';

function App() {

  return (
    <div>
      <div>
      <Pomodoro />
      </div>
      <div className='box'>
      <Todolist />
      </div>
    </div>
  );
}

export default App;

