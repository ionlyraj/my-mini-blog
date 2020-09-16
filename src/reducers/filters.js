const filterDefaultState = {
  text: '',
  sortBy: 'title'
};

const filtersReducer = (state = filterDefaultState, action) => {
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return {...state, text: action.text}
    case 'SET_BY_TITLE':
      return {...state, sortBy: 'title'}
    case 'SET_BY_DATE':
      return {...state, sortBy: 'date'}
    default:
      return state;
  }
};

export default filtersReducer;