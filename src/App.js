import React from 'react';
import './App.css';
import DragNDrop from './components/DragNDrop';

const data = [
  { title: 'group1', items: ['1', '2', '3'] },
  { title: 'group2', items: ['4', '5', '6'] }]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DragNDrop data={ data} />
      </header>
    </div>
  );
}

export default App;
