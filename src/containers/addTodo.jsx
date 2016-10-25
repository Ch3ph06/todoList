import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

class AddTodo extends Component {
  state = { value: '' };

  addTodo = () => {
    const { addTodo } = this.props;
    const { value } = this.state;

    console.log(addTodo);
    addTodo(value);
    this.setState({ value: '' })
  }

  render() {
    return (
      <div>
        <input onChange={({ target: { value }}) => this.setState({ value })} />
        <button onClick={this.addTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(actions, dispatch);


export default connect(null, mapDispatchToProps)(AddTodo);
