import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, setByTitle, setByDate } from '../actions/filters';

const BlogListFilter = (props) => (
  <div>
    <input type='text' placeholder={'Search blog'} onChange={(e)=>{
      props.dispatch(setTextFilter(e.target.value))
    }}/>
    <select value={props.filters.sortBy} onChange={(e) => {
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
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(BlogListFilter);
