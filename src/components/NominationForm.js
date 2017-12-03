import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {TextField} from 'redux-form-material-ui';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import {connect} from 'react-redux';
import RunnerIcon from './RunnerIcon';
import {grey500 as grey, black500 as black} from 'material-ui/styles/colors';
import {isRequired, isEmail} from '../validations';

let NominationForm = ({ handleSubmit, pristine, submitting }) => {
  const disabled = pristine || submitting;
  return (

    <div style={styles.formContainer}>

      <form onSubmit={handleSubmit}>

        <div style={styles.fieldsContainer}>

          <div style={styles.fields}>
            <div style={styles.fieldsLabel}>Nominee</div>
            <div>
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
            <div>
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
                            icon: <RunnerIcon {...{color: disabled ? grey : black }}/>,
                            disabled }} />
        </div>

      </form>

    </div>
  )
}

const margin = 1

const styles = {
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  fieldsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  fieldsLabel: {
    display: 'flex',
    alignSelf: 'center',
    fontWeight: 'bold',
    /* width: '100%',
     * height: '100%',
     * backgroundColor: grey,
     * color: 'white',
     * textAlign: 'center',
     * verticalAlign: 'center',*/
  },
  fields: {
    display: 'flex',
    flexDirection: 'column',
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
     name,
     component: TextField,
     hintText: placeholder,
     floatingLabelText: placeholder,
     validate: validations || [],
     style: styles.field,
   }}/>

const LongTextFieldOf = ({ name, placeholder, validations }) =>
   <Field {...{
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
const actions = {};

export default connect(mapStateToProps, actions)(
  reduxForm({ form: 'nomination' })(NominationForm)
)
