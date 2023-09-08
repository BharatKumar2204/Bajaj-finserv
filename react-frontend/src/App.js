import React from 'react';
import './App.css';
import GetOperation from './GetOperation';
import PostOperation from './PostOperation';

function App() {
  return (
    <div className="App">

      <div className="App-content">
        <GetOperation />
        <PostOperation />
      </div>
    </div>
  );
}

export default App;