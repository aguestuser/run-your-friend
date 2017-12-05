import React from 'react';
import {reduxForm} from 'redux-form';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import RunnerIcon from './RunnerIcon';
import PersonFields from './PersonFields';
import {grey, pink, buttonColorOf} from '../constants/colors';
import {generateId} from '../services/generators';
import {parseNominationPayload} from '../services/parsers';
import {createNominee} from '../redux/actions/nominees';
import {createNominator} from '../redux/actions/nominators';
import {createNomination} from '../redux/actions/nominations';
import {withRouter} from 'react-router-dom';
import {formContainer, fieldsContainer, submitContainer} from '../styles/form';

/* COMPONENT */

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
    <div style={formContainer}>

      <form onSubmit={
        handleSubmit(values => {
          const {nominee, nominator, nomination} = (parseNominationPayload(values, generateId));
          createNominee(nominee);
          createNominator(nominator);
          createNomination(nomination);
          history.push(`/nominees/${nominee.id}`);
        })
      }>

        <div style={fieldsContainer}>
           <PersonFields{...{
             title:       "Nominee",
             name:        { name: "nomineeName",        placeholder: "Your friend's name" },
             email:       { name: "nomineeEmail",       placeholder: "Your friend's email" },
             description: { name: "nomineeDescription", placeholder: "Why your friend should run" }
           }}/>
           <PersonFields{...{
             title:       "Nominator",
             name:        { name: "nominatorName",        placeholder: "Your name" },
             email:       { name: "nominatorEmail",       placeholder: "Your email" },
             description: { name: "nominatorDescription", placeholder: "How you would help your frien run" }
           }}/>
        </div>

        <div style={submitContainer}>
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

/* EXPORT */

const mapStateToProps = state => ({});
const actions = {createNominee, createNominator, createNomination};

export default withRouter(
  connect(mapStateToProps, actions)(
    reduxForm({ form: 'nomination' })(NominationForm)
  )
)
