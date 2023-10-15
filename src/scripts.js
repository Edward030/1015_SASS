import React from 'react';
import ReactDOM from 'react-dom';
import hiFunc from './method';
import '../public/styles.css';

const APP = () => {
  return (
    <div>
      <h1>React</h1>
      {hiFunc()}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <APP/>
  </React.StrictMode>
  , document.getElementById('app')
);
