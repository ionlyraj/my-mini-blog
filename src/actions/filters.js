// Set text filter

export const setTextFilter = (text = '') => {
  return {
    type: 'SET_TEXT_FILTER',
    text
  }
};

// Sort by title

export const setByTitle = () => {
  return {
    type: 'SET_BY_TITLE'
  }
};

// Sort by date

export const setByDate = () => {
  return {
    type: 'SET_BY_DATE'
  }
};
