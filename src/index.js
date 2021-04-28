import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './app';
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

ReactDOM.render(
  <>
    <GlobalStyles />
    <FirebaseContext.Provider value={{ firebase }}>
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);
