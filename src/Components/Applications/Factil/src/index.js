import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FactilApp from './App/factilApp';
import * as serviceWorker from './serviceWorker';
import {FactureProvider} from './Context/FactureContext';

ReactDOM.render(
  <FactureProvider>
  <FactilApp />
  </FactureProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
