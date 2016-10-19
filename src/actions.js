let nextTodoId = 0;
export const addTodo = (text) => {
  return {
    type: `addTodo`,
    id: nextTodoId++,
    text,
  };
};
export const toggleTodo = (id) => {
  return {
    type: `toggleTodo`,
    id,
  };
};
export const setVisibilityFilter = (filter) => {
  return {
    type: `setVisibilityFilter`,
    filter,
  };
};
