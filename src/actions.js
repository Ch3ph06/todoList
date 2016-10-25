let nextTodoId = 0;
// export const addTodo = (text) => (dispatch) => {
//   return dispatch({
//     type: `addTodo`,
//     id: nextTodoId++,
//     text,
//     lol: console.log(text),
//   });
// };

export function addTodo(text) {
  console.log(text);
  return {
    type: `addTodo`,
    id: nextTodoId++,
    text,
  };
}

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


