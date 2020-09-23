import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import MyMiniBlogRouter, { history } from './routers/MyMiniBlogRouter';
import configureStore from './store/configureStore';
import { startSetBlogs, startReadBlog } from './actions/blogs';
import { login, logout } from './actions/auth';
import { firebase } from './firebase/firebase';
import './styles/styles.scss';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <MyMiniBlogRouter />
  </Provider>
);

let hasRendered = false;

const appRender = () => {
  if(!hasRendered){
    ReactDOM.render(
      <React.StrictMode>
        {jsx}
      </React.StrictMode>,
      document.getElementById('root')
    );
    hasRendered = true;
  }
};

ReactDOM.render(
  <React.StrictMode>
    <LoadingPage />
  </React.StrictMode>,
  document.getElementById('root')
);

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetBlogs()).then(() => {
      appRender();
      if(history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  }
  else {
    store.dispatch(logout());
    const id = history.location.pathname.split('/');

    if(history.location.pathname === `/read/${id[2]}`) {
      store.dispatch(startReadBlog(id[2])).then(() => {
        appRender();
      })
    } else{
      appRender();
      history.push('/');
    }
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
