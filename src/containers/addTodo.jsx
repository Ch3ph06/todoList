import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';


const AddTodo = ({ addTodo }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          console.log(input.value);
          addTodo(input.value);
          input.value = ``;
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(actions, dispatch);


export default connect(null, mapDispatchToProps)(AddTodo);
