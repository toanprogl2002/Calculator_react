// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import * as serviceWorker from './serviceWorker';
import Calculator from "./components/calculator.js";

// ReactDOM.render(<Calculator />, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// <React.StrictMode>
//   <App />
// </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// const myElement = <h1>React is {5 + 5} times better with JSX</h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
//   <App/>
// );
// // // root.render(myElement);
// reportWebVitals();
