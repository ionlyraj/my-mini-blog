import React from 'react';
import BlogList from './BlogList';
import BlogListFilter from './BlogListFilter';

const BlogDashboardPage = () => (
  <div>
    <BlogListFilter />
    <BlogList />
  </div>
);

export default BlogDashboardPage;