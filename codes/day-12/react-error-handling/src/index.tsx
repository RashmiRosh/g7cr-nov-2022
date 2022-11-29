import React, { ErrorInfo } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';

const logError = (err: Error, errInfo: ErrorInfo) => {
  console.log(err.message);
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ErrorBoundary errorLogger={logError}>
    <App />
  </ErrorBoundary>
);