import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
// import reportWebVitals from './reportWebVitals';

const div = document.getElementById('root')
const root = ReactDOM.createRoot(div);
// const appDesgn = App()
// root.render(appDesgn);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
