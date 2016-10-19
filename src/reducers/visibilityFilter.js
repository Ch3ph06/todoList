const visibilityFilter = (state = `SHOW_ALL`, action) => {
  switch (action.type) {
    case `setVisibilityFilter`:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
