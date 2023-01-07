import React from 'react';
import './App.css';
import DragNDrop from './components/DragNDrop';

const data = [
  { title: 'To Do', items: ['Task 1', 'Task 2', 'Task 3'] },
  { title: 'Started', items: ['Task 4', 'Task 5'] },
  { title: 'QA', items: ['Task 6', 'Task 7', 'Task 8', 'Task 9'] },
  { title: 'Done', items: ['Task 6'] }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DragNDrop data={data} />
      </header>
    </div>
  );
}

export default App;
