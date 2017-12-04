import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {TextField} from 'redux-form-material-ui';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import RunnerIcon from './RunnerIcon';
import {grey500 as grey, purpleA200 as purple} from 'material-ui/styles/colors';
import {isRequired, isEmail} from '../services/validations';
import {generateId} from '../services/generators';
import {parseNominationPayload} from '../services/parsers';
import {createNominee} from '../redux/actions/nominees';
import {createNominator} from '../redux/actions/nominators';
import {createNomination} from '../redux/actions/nominations';
import {withRouter} from 'react-router-dom';

let NominationForm = ({
  handleSubmit,
  pristine,
  submitting,
  createNominee,
  createNominator,
  createNomination,
  history
}) => {

  const disabled = pristine || submitting;
  return (
    <div style={styles.formContainer}>

    <form onSubmit={
      handleSubmit(values => {
        const {nominee, nominator, nomination} = (parseNominationPayload(values, generateId));
        createNominee(nominee);
        createNominator(nominator);
        createNomination(nomination);
        history.push(`/nominees/${nominee.id}`);
      })
    }>

    <div style={styles.fieldsContainer}>

      <div style={styles.fields}>
        <div style={styles.fieldsLabel}>Nominee</div>
          <div style={styles.firstRowFields}>
          <TextFieldOf {...{name: 'nomineeName',
                            placeholder: "Your friend's name",
                            validations: [isRequired]}}/>
          <TextFieldOf {...{name: 'nomineeEmail',
                            placeholder: "Your friend's email",
                            validations: [isRequired, isEmail]}}/>
        </div>
        <LongTextFieldOf {...{name: 'nomineeDescription',
                              placeholder: "Why your friend should run",
                              validations: [isRequired]}}/>

      </div> {/*fields*/}

      <div style={styles.fields}>
        <div style={styles.fieldsLabel}>Nominator</div>
          <div style={styles.firstRowFields}>
          <TextFieldOf {...{name: 'nominatorName',
                            placeholder: "Your name",
                            validations: [isRequired]}}/>
          <TextFieldOf {...{name: 'nominatorEmail',
                            placeholder: "Your email",
                            validations: [isRequired, isEmail]}}/>
        </div>
        <LongTextFieldOf {...{name: 'nominatorDescription',
                              placeholder: "How you would help your friend run",
                              validations: [isRequired]}}/>
      </div> {/*fields*/}

    </div> {/*fieldsContainer*/}

    <div style={styles.submitContainer}>
    <FlatButton {...{ label: 'Run!',
                      type: 'submit',
                      style: { color: buttonColorOf(disabled) },
                      icon: <RunnerIcon {...{color: buttonColorOf(disabled) }}/>,
                      disabled }} />
    </div>

    </form>

    </div>
  )
}


const buttonColorOf = disabled => disabled ? grey: purple;

const margin = 1
const highlightColor = purple;
const highlightStyles = {
  hintStyle: { color: grey },
  errorStyle: { color: highlightColor },
  underlineStyle: { borderColor: highlightColor },
  underlineFocusStyle: { borderColor: highlightColor },
  floatingLabelStyle: { color: grey },
  floatingLabelFocusStyle: { color: highlightColor},
};

const styles = {
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  fieldsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  fieldsLabel: {
    display: 'flex',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  fields: {
    display: 'flex',
    flexDirection: 'column',
  },
  firstRowFields: {
    display: 'flex',
    alignContents: 'flex-start',
    flexWrap: 'wrap',
  },
  field: {
    margin: `${margin}rem`,
  },
  wideField: {
    position: 'relative',
    width: `calc(100% - ${2*margin}rem)`,
  },
  submitContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }
}

const TextFieldOf = ({ name, placeholder, validations }) =>
  <Field {...{
    ...highlightStyles,
    name,
    component: TextField,
    hintText: placeholder,
    floatingLabelText: placeholder,
    validate: validations || [],
    style: styles.field,
  }}/>

const LongTextFieldOf = ({ name, placeholder, validations }) =>
  <Field {...{
    ...highlightStyles,
    name,
    component: TextField,
    hintText: placeholder,
    floatingLabelText: placeholder,
    validate: validations || [],
    multiLine: true,
    rows: 2,
    style: {...styles.field, ...styles.wideField }
  }}/>


const mapStateToProps = state => ({});
const actions = {createNominee, createNominator, createNomination};

export default withRouter(
  connect(mapStateToProps, actions)(
    reduxForm({ form: 'nomination' })(NominationForm)
  )
)
