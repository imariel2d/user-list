import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import { App } from './app';
import { worker } from './api-mock';

import './style/index.css';

const queryClient = new QueryClient();

worker.start();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
