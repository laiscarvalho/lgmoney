import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from 'miragejs';

import App from './App';

createServer({
  routes(){
    this.namespace = 'api';

    this.get('/transactions', ()=>{
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'food',
          createdAt: '2022-08-06'
        }
      ]

    })
  }

})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
