import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTextFilter, setByTitle, setByDate } from '../actions/filters';

const BlogListFilter = (props) => (
  
  <div className='page-header'>
    <div className='content-container'>
      <div className='input-group'>
        <div className='input-group'>
          <div className='input-group__item'>
            <input className='text-input' type='text' value={props.filters.text} placeholder={'Search blog'} onChange={(e)=>{
              props.dispatch(setTextFilter(e.target.value))
            }}/>
          </div>
          <div className='input-group__item'>
            <select className='select' value={props.filters.sortBy} onChange={(e) => {
              if(e.target.value === 'title'){
                props.dispatch(setByTitle(e.target.value))
              }
              else if(e.target.value==='date'){
                props.dispatch(setByDate(e.target.value))
              }
            }
            }>
              <option value='title' >Title</option>
              <option value='date' >Date</option>
            </select>
          </div>
        </div>
        <div>
          <div className='input-group__item page-header__actions'>
            <Link className='button' to='/create'>Add Blog</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(BlogListFilter);
