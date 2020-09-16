import { createStore, combineReducers } from 'redux';
import blogsReducer from '../reducers/blogs';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(combineReducers(
    {
      blogs: blogsReducer,
      filters: filtersReducer
    }
  ));

  return store;
}


// store.subscribe(() => {
//   const state = store.getState();
//   const visibleBlogs = getVisibleBlogs(state.blogs, state.filters);
//   console.log(visibleBlogs);
// });

// const blog1 = store.dispatch(addBlog({
//   title: 'a blog',
//   body: 'here is my blog',
//   createdAt: 100
// }));

// const blog2 = store.dispatch(addBlog({
//   title: 'my second blog',
//   body: 'this is just for first testing purpose',
//   createdAt: 200
// }));

// const blog3 = store.dispatch(addBlog({
//   title: 'my third blog',
//   body: 'this is just for testing purpose',
//   createdAt: 300
// }));

// // store.dispatch(deleteBlog(blog1.blog.id));

// // store.dispatch(editBlog(
// //   blog2.blog.id, {title: 'my 2nd blog',
// //   body: 'I have changed my blog'}
// // ));

// //store.dispatch(setTextFilter('SeCond'));
// // store.dispatch(setByDate());
// store.dispatch(setByTitle());