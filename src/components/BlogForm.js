import moment from 'moment';
import React, { useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import 'react-dates/lib/css/_datepicker.css';


const BlogForm = (props) => {
  const [title,setTitle] = useState(props.blog ? props.blog.title : '');
  const [body,setBody] = useState(props.blog ? props.blog.body : '');
  const [error,setError] = useState('');
  const createdAt = props.blog ? moment(props.blog.createdAt) : moment();

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
    <form className='form' onSubmit={onFormSubmit}>
      {error && <p className='form__error'>{error}</p>}
      <input 
        type='text' 
        className='text-input'
        placeholder='Enter blog title'
        value={title}
        autoFocus
        onChange={(e) => {setTitle(e.target.value)}}
      />
      <CKEditor 
        className='CKEditor'
        placeholder='Enter blog body'
        onInit={(editor) => {
          editor.data.set(body);
          }
        }
        editor={ClassicEditor}
        onChange={(e, editor) => {
          const data = editor.getData();
          setBody(data)}
        }
      />
      <div>
        <button className='button'>Save Blog</button>
      </div>
    </form>
  )
};

export default BlogForm;
