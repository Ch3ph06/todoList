import React from 'react';
import Footer from './footer.jsx';
import AddTodo from '../containers/addTodo.jsx';
import VisibleTodoList from '../containers/visibleTodoList.jsx';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
