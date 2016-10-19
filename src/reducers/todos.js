const todo = (state = {}, action) => {
  switch (action.type) {
    case `addTodo`:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case `toggleTodo`:
      if (action.id !== state.id) {
        return state;
      }
      return Object.assign({}, state, {
        completed: !state.completed,
      });
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case `addTodo`:
      return [
        ...state,
        todo(undefined, action),
      ];
    case `toggleTodo`:
      return state.map(t =>
      todo(t.action));
    default:
      return state;
  }
};

export default todos;
