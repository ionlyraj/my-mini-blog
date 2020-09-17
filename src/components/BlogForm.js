import moment from 'moment';
import React, { useState } from 'react';
import 'react-dates/lib/css/_datepicker.css';


const BlogForm = (props) => {
  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');
  const [error,setError] = useState('');
  const createdAt = moment();

  const onFormSubmit = (e) => {
    e.preventDefault();
    if(!title || !body){
      setError('Please add title and body!');
    }
    else{
      setError('');
      props.onSubmit({
        title,
        body,
        createdAt: createdAt.valueOf()
      })
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={onFormSubmit}>
        <input 
          type='text' 
          placeholder='Enter blog title'
          value={title}
          autoFocus
          onChange={(e) => {setTitle(e.target.value)}}
        />
        <textarea 
          placeholder='Enter blog body'
          value={body}
          onChange={(e) => {setBody(e.target.value)}}
        />
        <button>Add Blog</button>
      </form>
    </div>
  )
};

export default BlogForm;