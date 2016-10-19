import React from 'react';
import FilterLink from '../containers/FilterLink.jsx';

const footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">Show all</FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">Show active</FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">Show completed</FilterLink>
  </p>
);

export default footer;
