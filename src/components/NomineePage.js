import React from 'react';
import {connect} from 'react-redux';
import {getNominee, getNominator, getBackers} from '../redux/reducers/nominees';
import SupporterForm from './SupporterForm';
import Runners from './Runners';
import GithubLink from './GithubLink';
import {pink} from '../constants/colors';
import {isEmpty} from 'lodash';
import {generateId} from '../services/generators';
import{row, blackRowContents, whiteRowContents} from '../styles/row';

const NBSP = '\u00a0';
const runner = () => <Runners {...{number: 1, height: 4 }}/>

/* <li>
 *   <span style={styles.name}>{nominator.name}</span>{NBSP}({nominator.description}){NBSP}
 * </li>*/


let NomineePage = ({nominee, nominator, backers}) =>
  <div style={container}>

    <div style={row}>
      <div style={blackRowContents}>
        <span style={name}>{nominator.name}</span>
        {NBSP}thinks{NBSP}
        <span style={name}>{nominee.name }</span> {NBSP}should run because:
      </div>
    </div>

    <div style={row}>
      <div style={whiteRowContents}>
        {nominee.description}
      </div>
    </div>

    <div style={row}>
      <div style={blackRowContents}>
        <span style={name}>{nominee.name}</span>{NBSP}is suported by:{NBSP}
      </div>
    </div>

    <div style={row}>
      <div style={whiteRowContents}>
        <ul>
          {backers.map(backer =>
            <li>
              <span style={name}>{backer.name}</span>{NBSP}({backer.description}){NBSP}
            </li>
          )}
        </ul>
      </div>
    </div>

    <div style={row}>
      <div style={blackRowContents}>
        Will{NBSP}<span style={name}>you</span>{NBSP}add your support?
      </div>
    </div>

    <div style={row}>
      <div style={whiteRowContents}>
        <SupporterForm{...{ nominee } }/>
      </div>
    </div>

    <GithubLink/>
    
  </div>;
        


// styles

const name = {
  color: pink,
  fontWeight: 'bold',
};

const container= {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  marginTop: '.6em',
};

/* EXPORT */

const mapStateToProps = (state, ownProps) => ({
  nominee: getNominee(state, ownProps.match.params.id) || defaultNominee,
  nominator: getNominator(state, ownProps.match.params.id) || defaultNominator,
  backers: (() => {
    const backers = getBackers(state, ownProps.match.params.id)
    return isEmpty(backers) ? getDefaultBackers(state) : backers
  })(),
});

export default connect(mapStateToProps, {})(NomineePage);

// for designing and demoing (for now)
const defaultNominee = { id: generateId(), name: 'Fake Nominee', description: 'is a good listener'};
const defaultNominator = { id: generateId(), name: 'Fake Nominator', description: 'gonna phonebank'};
const getDefaultBackers = state => getBackers(state, defaultNominee.id);
