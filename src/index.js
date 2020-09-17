import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import MyMiniBlogRouter from './routers/MyMiniBlogRouter';
import configureStore from './store/configureStore';
import { addBlog } from './actions/blogs';

const store = configureStore();

store.dispatch(addBlog(
  {title: 'my first blog',
  body: '1st blog started',
  createdAt: 100
  }
));

store.dispatch(addBlog(
  {title: 'second blog',
body: 'testing purpose only',
createdAt: 200}
));

store.dispatch(addBlog(
  {title: 'a blog',
body: 'testing purpose only',
createdAt: -200}
));

store.dispatch(addBlog(
  {title: 'a forth blog',
body: 'testing purpose only',
createdAt: 400}
));

const jsx = (
  <Provider store={store}>
    <MyMiniBlogRouter />
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    {jsx}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
