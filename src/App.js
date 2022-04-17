import React from 'react';
import './App.css';
import Darshan from './components/Darshan';


function App() {
  let name="darshan";

  let title="naik"
  return (
    <>
    <div className="app">
     <h1>hello world</h1>
    </div>
    <div>
      <Darshan name={name} title={title} />
    </div>
    </>
  );
}


export default App;
