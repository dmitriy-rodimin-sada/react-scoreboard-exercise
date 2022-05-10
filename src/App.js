import React from 'react';
import './style.css';

const Score = (props) => {
  return (
    <div>
      <div>{props.team}</div>
      <div>{props.score}</div>
      <button>+</button>
    </div>
  );
};

const App = () => {
  let guest = 0;
  let home = 0;

  return (
    <>
      <Score team="Home" score={home}></Score>
      <Score team="Guest" score={guest}></Score>
    </>
  );
};

export default App;
