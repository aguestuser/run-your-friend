import React from 'react';
import {connect} from 'react-redux';
import RunnerRow from './RunnerRow';
import SupporterForm from './SupporterForm';
import GithubLink from './GithubLink';
import ShareIcons from './ShareIcons';
import {row, blackRowContents, whiteRowContents} from '../styles/row';
import {pink} from '../constants/colors';
import {getNominee, getNominator, getBackers} from '../redux/reducers/nominees';
import {generateId} from '../services/generators';
import {isEmpty} from 'lodash';


const NBSP = '\u00a0'; // non-breaking space (extract to `src/constants` if needed elsewhere)

let NomineePage = ({nominee, nominator, backers}) =>
  <div style={container}>

    <RunnerRow/>

    <div style={row}>
      <div style={blackRowContents}>
        <span style={name}>{nominator.name}</span>
        {NBSP}thinks{NBSP}
        <span style={name}>{nominee.name }</span> {NBSP}should run for office because:
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

   <RunnerRow/>

    <div style={row}>
      <div style={whiteRowContents}>
        <SupporterForm{...{ nominee } }/>
      </div>
    </div>

    <ShareIcons {...{
      url:'http://pynchonwiki.com',
      quote: `Help ${nominee.name} run for office! They'd be great because: ${nominee.description}`,
    }}/>

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
