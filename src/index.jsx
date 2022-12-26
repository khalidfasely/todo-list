//global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//global.WebSocket = require('ws');
//global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './router/AppRouter';
import reportWebVitals from './reportWebVitals';
import Loader from './components/Loader';
import configeStore from './store/configureStore';
import { firebase } from './firebase/firebase';
import { login, logout } from './actions/auth';
import { startSetTodoList } from './actions/todoList';
import './styles/styles.scss';

const store = configeStore();

//ReactDOM.render(
//  <React.StrictMode>
//    <Provider store={store}>
//      <AppRouter />
//    </Provider> 
//  </React.StrictMode>,
//  document.getElementById('root')
//);

const jsx = (
    <React.StrictMode>
      <Provider store={store}>
        <AppRouter />
      </Provider> 
    </React.StrictMode>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
      ReactDOM.render(jsx, document.getElementById('root'));
      hasRendered = true;
  };
};

ReactDOM.render(<Loader />, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
      store.dispatch(login(user.uid));
      //console.log('uid', user.uid);
      store.dispatch(startSetTodoList()).then(() => {
          renderApp();
          if (history.location.pathname === '/') {
              history.push('/home');
          }
      });
  } else {
      store.dispatch(logout());
      renderApp();
      history.push('/');
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
