import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/theme.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);