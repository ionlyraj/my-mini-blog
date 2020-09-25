import React, { useState } from 'react';
import { connect } from 'react-redux';
import BlogForm from './BlogForm';
import { startEditBlog, startDeleteBlog } from '../actions/blogs';
import DeleteConfirmModal from './DeleteConfirmModal';

const EditBlogPage = (props) => {

  const [selectedBlog, setSelectedBlog] = useState('');

  const onRemoveClick = () => {
    setSelectedBlog(props.blog.title);
  };

  const setConfirmationFalse = () => {
    setSelectedBlog('');
  };

  const removeBlog = () => {
    props.dispatch(startDeleteBlog(props.blog.id));
    setSelectedBlog('');
    props.history.push('/');
  };

  return (
    <div>
      <div className='page-header'>
        <div className='content-container'>
          <h1 className='page-header__title'>Edit Blog</h1>
        </div>
      </div>
      <div className='content-container'>
        <p >Post readable at: <a className='blog-link' href={`https://my-mini-blog-reactapp.herokuapp.com/read/${props.match.params.id}`}>
          https://my-mini-blog-reactapp.herokuapp.com/read/{props.match.params.id}</a>
        </p>
        <BlogForm
          blog={props.blog}
          onSubmit={(blog) => {
            props.dispatch(startEditBlog(props.blog.id, blog))
            props.history.push('/');
          }}
        />
        <button
          className='button button--remove'
          onClick={onRemoveClick}
        >
          Delete Blog
        </button>
        <DeleteConfirmModal
          selectedBlog={selectedBlog}
          removeBlog={removeBlog}
          setConfirmationFalse={setConfirmationFalse}
        />
      </div>
    </div>
  )
};

const mapStateToProps = (state, props) => {
  return {
    blog: state.blogs.find((blog) => {
      return blog.id === props.match.params.id
    })
  }
};

export default connect(mapStateToProps)(EditBlogPage);
