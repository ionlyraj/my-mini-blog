import React from 'react';
import BlogList from './BlogList';
import BlogListFilter from './BlogListFilter';

const BlogDashboardPage = () => (
  <div>
    this is from dashboard page
    <BlogListFilter />
    <BlogList />
  </div>
);

export default BlogDashboardPage;