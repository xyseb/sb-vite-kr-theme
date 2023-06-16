// import React from 'react';
// import ReactDOM from 'react-dom/client';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '@progress/kendo-react-buttons';
//import App from './App.tsx'
import './index.scss';
// import '@progress/kendo-theme-fluent/scss/all.scss';

const App = () => {
  return (
    <React.Fragment>
      <Button>Browse</Button>
    </React.Fragment>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
