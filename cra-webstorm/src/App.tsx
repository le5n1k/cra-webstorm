import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Rating />
    </div>
  );
}

function Star() {
  return (
      <div>Star</div>
  );
}

function Rating() {
  return (
      <div>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
  )
}
export default App;
