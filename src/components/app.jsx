import React from 'react';
import footer from './footer.jsx';
import AddTodo from '../containers/addTodo.jsx';
import visibleTodoList from '../containers/visibleTodoList.jsx';

const App = () => (
  <div>
    <AddTodo />
    <visibleTodoList />
    <footer />
  </div>
);

export default App;
