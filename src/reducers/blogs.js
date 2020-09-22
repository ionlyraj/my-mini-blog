// Blogs Reducer

const blogDefaultState = [];

const blogsReducer = (state = blogDefaultState, action) => {
  switch(action.type){
    case 'ADD_BLOG':
      return [...state, action.blog];
    case 'DELETE_BLOG':
      return state.filter(blog => blog.id !== action.id );
    case 'EDIT_BLOG':
      return state.map(blog => {
        if(blog.id===action.id)
          return {...blog, ...action.updates};
        else return blog;
      });
    case 'SET_BLOGS':
      return action.blogs;
    case 'READ_BLOG':
      return [...state, action.blog];
    default: 
      return state;
  }
};

export default blogsReducer;