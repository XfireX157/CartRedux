import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterDom from './Router';
import {Provider} from 'react-redux'
import store from './Sotre';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterDom />
    </Provider>
  </React.StrictMode>
);
