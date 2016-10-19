import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import link from '../components/link.jsx';

const FilterLink = ({ setVisibilityFilter, filter, ...props }) => <link {...props} onClick={() => setVisibilityFilter(filter)} />;

const mapStateToProps = (state, ownprops) => {
  return {
    active: ownprops.filter === state.visibilityFilter,
  };
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(actions, dispatch)
);

// const FilterLink = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(link);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink);
