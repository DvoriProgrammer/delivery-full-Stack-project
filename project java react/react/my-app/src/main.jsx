import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
// import store from './store.js';
 // Adjust the path to your store file
import App from './App.jsx';
import './index.css';
import {store} from './redux/store.js';
import { Provider } from 'react-redux';
import Layout from './components/Layout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
  </Provider>
  </React.StrictMode>,
);
