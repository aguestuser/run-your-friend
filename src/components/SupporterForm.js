import React from 'react';
import PersonFields from './PersonFields';
import FlatButton from 'material-ui/FlatButton';
import RunnerIcon from './RunnerIcon';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {reduxForm} from 'redux-form';
import {buttonColorOf} from '../constants/colors';
import {parseSupporterPayload} from '../services/parsers';
import {createSupporter} from '../redux/actions/supporters';
import {createPledge} from '../redux/actions/pledges';
import {formContainer, fieldsContainer, submitContainer} from '../styles/form';
import {generateId} from '../services/generators';

let SupporterForm = ({
  nominee,
  pristine,
  submitting,
  reset,
  handleSubmit,
  createSupporter,
  createPledge
}) => {

  const disabled = pristine || submitting;
  return (
    <div style={formContainer}>

      <form onSubmit={
        handleSubmit(values => {
          const supporter = parseSupporterPayload(values, generateId);
          createSupporter(supporter);
          createPledge({ supporterId: supporter.id, nomineeId: nominee.id })
          reset();
        })
      }>

        <div style={fieldsContainer}>
          <PersonFields{...{
            name:        { name: "name",        placeholder: "Your name" },
            email:       { name: "email",       placeholder: "Your email" },
            description: { name: "description", placeholder: `How you would help ${nominee.name} run` }
          }}/>
        </div>

        <div style={submitContainer}>
          <FlatButton {...{ label: 'Pledge!',
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

const mapStateToProps = (state, ownProps) => ownProps;
const actions = {createSupporter, createPledge};

export default withRouter(
  connect(mapStateToProps, actions)(
    reduxForm({ form: 'supporter' })(SupporterForm)
  )
)
