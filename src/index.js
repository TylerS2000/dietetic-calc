import React from 'react';
import ReactDOM from 'react-dom/client';
import Calc from './calc';
import Nav from './nav';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div>
    <Nav />
    <Calc />
    </div>
  </React.StrictMode>
);


