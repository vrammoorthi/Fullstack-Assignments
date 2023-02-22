import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import App2 from './Shapes/app2';
import App3 from './Shapes/app3';
import App4 from './Shapes/app4';
import App5 from './Shapes/app5';
import App6 from './Shapes/app6';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <App2 />
    <br></br> 
     <App3 />
     <br></br>
     <App4  r="4"/>
     <br></br>
     <App5 r="5"/>  
     <br></br>
     <App6 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
