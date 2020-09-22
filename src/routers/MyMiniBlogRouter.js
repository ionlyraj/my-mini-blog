import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import BlogDashboardPage from '../components/BlogDashboardPage';
import LoginPage from '../components/LoginPage';
import AddBlogPage from '../components/AddBlogPage';
import EditBlogPage from '../components/EditBlogPage';
import ReadBlogPage from '../components/ReadBlogPage';
import NotFoundPage from '../components/NotFoundPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const MyMiniBlogRouter = () => {
  return (
    <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path='/' component={LoginPage} exact={true}/>
        <PrivateRoute path='/dashboard' component={BlogDashboardPage}/>
        <PrivateRoute path='/create' component={AddBlogPage} />
        <PrivateRoute path='/edit/:id' component={EditBlogPage} />
        <PublicRoute path='/read/:id' component={ReadBlogPage} />
        <Route component= {NotFoundPage} />
      </Switch>
    </div>
    </Router>
  )
};

export default MyMiniBlogRouter;