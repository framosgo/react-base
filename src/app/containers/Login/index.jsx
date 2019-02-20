import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import logo from 'assets/images/logo.png';
import * as Actions from './actions';
import styles from './styles';

class Login extends Component {
  
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
    this.actions.loginRequest();
  }

  render() {
    return (
      <div className={ styles.Main }>
        <img src={ logo } />
      </div>
    );
  }
}

export default connect(null)(Login);
