import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// transfers all planes into planeBox on app start
const origData = require("./data.json");
origData.planes.forEach((plane) => {
    plane.spot = "planeBox";
    origData.spots.planeBox.plane.push(plane);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
