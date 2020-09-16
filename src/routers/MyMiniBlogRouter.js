import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import BlogDashboardPage from '../components/BlogDashboardPage';
import AddBlogPage from '../components/AddBlogPage';
import EditBlogPage from '../components/EditBlogPage';
import ReadBlogPage from '../components/ReadBlogPage';
import NotFoundPage from '../components/NotFoundPage';

const MyMiniBlogRouter = () => {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={BlogDashboardPage} exact={true}/>
        <Route path='/create' component={AddBlogPage} />
        <Route path='/edit/:id' component={EditBlogPage} />
        <Route path='/read' component={ReadBlogPage} />
        <Route component= {NotFoundPage} />
      </Switch>
    </div>
    </BrowserRouter>
  )
}

export default MyMiniBlogRouter;