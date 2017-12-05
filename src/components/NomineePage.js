import React from 'react';
import {connect} from 'react-redux';
import {getNominee, getNominator, getBackers} from '../redux/reducers/nominees';
import SupporterForm from './SupporterForm';
import Runners from './Runners';
import GithubLink from './GithubLink';
import {pink} from '../constants/colors';
import {isEmpty} from 'lodash';
import {generateId} from '../services/generators';

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

    <div style={bottomRow}>
      <div style={{...blackRowContents, fontWeight: 'normal'}}>
        <GithubLink/>
      </div>
    </div>
    
  </div>;
        


// styles

const row = {
  display: 'flex',
  flexDirection: 'row',
}

const bottomRow = {
  position: 'absolute',
  bottom: 0,
  width: '100%',
}

const rowContents = {
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  flexWrap: 'wrap',
  marginLeft: '-1em',
}

const blackRowContents = {
  ...rowContents,
  color: 'white',
  backgroundColor: 'black',
  fontSize: '1.2em',
  fontWeight: 'bold',
  paddingBottom: '.2em',
  paddingLeft: '.2em',
  textAlign: 'center',
}

const whiteRowContents = {
  ...rowContents,
  fontSize: '.8em',
}

const name = {
  color: pink,
  fontWeight: 'bold',
};

const container= {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
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
