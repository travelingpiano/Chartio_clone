import React from 'react';
import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login,signup} from '../../actions/session_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state,ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch,ownProps) => ({
  processForm: (user) =>{
    return ownProps.location.pathname === '/login' ?
      dispatch(login(user)) : dispatch(signup(user));
  },
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user))
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SessionForm));
