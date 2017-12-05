import React from 'react';
import {Field} from 'redux-form';
import {TextField} from 'redux-form-material-ui';
import {isRequired, isEmail} from '../services/validations';
import {grey, pink} from '../constants/colors';

/* COMPONENTS */

const PersonFields = ({title, name, email, description}) =>
  <div style={styles.fields}>
    <div style={styles.fieldsLabel}>
     {title}
    </div>
    <div style={styles.firstRowFields}>
      <TextFieldOf {...{ name: name.name,
                         placeholder: name.placeholder,
                         validations: [isRequired] } }/>
      <TextFieldOf {...{ name: email.name,
                         placeholder: email.placeholder,
                         validations: [isRequired, isEmail] } }/>
    </div>
    <LongTextFieldOf {...{ name: description.name,
                           placeholder: description.placeholder,
                           validations: [isRequired] } }/>
  </div>;

const TextFieldOf = ({ name, placeholder, validations }) =>
      <Field {...{
        ...highlightStyles,
        name,
        component: TextField,
        hintText: placeholder,
        floatingLabelText: placeholder,
        validate: validations || [],
        style: styles.field,
      }}/>;

const LongTextFieldOf = ({ name, placeholder, validations }) =>
      <Field {...{
        ...highlightStyles,
        name,
        component: TextField,
        hintText: placeholder,
        floatingLabelText: placeholder,
        validate: validations || [],
        multiLine: true,
        style: {...styles.field, ...styles.wideField }
      }}/>;

/* STYLES */

const margin = 1
const highlightColor = pink;
const highlightStyles = {
  hintStyle: { color: grey },
  errorStyle: { color: highlightColor },
  underlineStyle: { borderColor: highlightColor },
  underlineFocusStyle: { borderColor: highlightColor },
  floatingLabelStyle: { color: grey },
  floatingLabelFocusStyle: { color: highlightColor},
};

const styles = {
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
}

/* EXPORT */

export default PersonFields;
