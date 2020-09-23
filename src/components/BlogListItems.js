import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const BlogListItems = ({id, title, body, createdAt}) => (
  <Link className='list-item' to={`/edit/${id}`}>
    <h3 className='list-item__title'>{title}</h3>
    <span className='list-item__sub-title'>{moment(createdAt).format('MMMM Do, YYYY')}</span>
  </Link>
)

export default BlogListItems;