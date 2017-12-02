import React, { Component, PropTypes } from 'react';
import {Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

class NominationForm extends Component {
  
};


const mapStateToProps = state => state;
const actions = {};

export default connect(mapStateToProps, actions)(
  reduxForm({ form: 'nomination' })(NominationForm)
);
