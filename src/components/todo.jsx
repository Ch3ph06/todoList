import React, { PropTypes } from 'react';

const Todo = ({ onClick, text, completed }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? `line-through` : `none`,
    }}
  >
  {text}
  </li>
);

Todo.PropTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Todo;
