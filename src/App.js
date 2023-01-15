import './App.css';
import React, { useState } from 'react';
import DragNDrop from './components/DragNDrop';

const data = [
  { title: 'To Do', items: ['Task 1', 'Task 2', 'Task 3'] },
  { title: 'Started', items: ['Task 4', 'Task 5'] },
  { title: 'QA', items: ['Task 6', 'Task 7', 'Task 8', 'Task 9'] },
  { title: 'Done', items: ['Task 10'] }
]

const dataHandler = (data, temp1) => {
  data = temp1;
}

function App() {
  const [list, setList] = useState(data);
  const [name, setName] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const temp1 = list;
      const temp2 = temp1[0];
      const temp3 = temp2.items;
      temp3.push(name);
      temp1[0].items = temp3;
      setList(temp1);
      console.log(list);
      dataHandler(data, temp1);
      setName('');
    }
  }

  return (
    <div className="App">
      <div className='bg'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <button>Save</button>
      </form>
      <header className="App-header">
        <DragNDrop data={list} />
        </header>
      </div>
    </div>
  );
}

export default App;
