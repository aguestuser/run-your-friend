import React from 'react';
import {connect} from 'react-redux';
import {getNominee, getNominator} from '../redux/reducers/nominees';
import runner from '../img/running-person.gif';
import Runners from './Runners';
import {grey500 as grey, purpleA200 as purple} from 'material-ui/styles/colors';
import willSmith from '../img/running-will-smith.gif';

const NUM_RUNNERS = 1;
const HEADER_HEIGHT = 5;
const RUNNER_HEIGHT = 4;
const MARGIN_WIDTH = 7.6;
const NBSP = '\u00a0'

let NomineePage = ({nominee, nominator}) =>
  <div style={styles.container}>

    <div style={styles.header}>
      <Runners {...{number: NUM_RUNNERS, height: RUNNER_HEIGHT }}/>
      <div style={styles.headerText}>
        <span style={styles.name}>{nominator.name}</span>
        {NBSP}thinks{NBSP}
        <span style={styles.name}>{nominee.name }</span>
        {NBSP}should run for office because:
      </div>
      <Runners {...{number: NUM_RUNNERS, height: RUNNER_HEIGHT }}/>
    </div>

    <div style={styles.descriptionContainer}>
      <Runners {...{number: NUM_RUNNERS, height: RUNNER_HEIGHT }}/>
      <div style={styles.nomineeDescription}>
        {nominee.description}
      </div>
      <Runners {...{number: NUM_RUNNERS, height: RUNNER_HEIGHT }}/>
    </div>

    <div style={styles.supportersHeader}>
      <Runners {...{number: NUM_RUNNERS, height: RUNNER_HEIGHT }}/>
      <div style={styles.supportersHeaderText}>
        <span style={styles.name}>{nominee.name}</span>{NBSP}is suported by:{NBSP}
      </div>
      <Runners {...{number: NUM_RUNNERS, height: RUNNER_HEIGHT }}/>
    </div>

    <div style={styles.supportersContainer}>
      <Runners {...{number: NUM_RUNNERS, height: RUNNER_HEIGHT }}/>
        <div style={styles.supportersList}>
        <ul>
          <li>
            <span style={styles.name}>{nominator.name}</span>{NBSP}({nominator.description}){NBSP}
          </li>
        </ul>
      </div>
      <Runners {...{number: NUM_RUNNERS, height: RUNNER_HEIGHT }}/>
    </div>

    <div style={styles.supporterFormHeader}>
      <Runners {...{number: NUM_RUNNERS, height: RUNNER_HEIGHT }}/>
      <div style={styles.supporterFormHeaderText}>
        Will{NBSP}<span style={styles.name}>you</span>{NBSP}add your support?
      </div>
      <Runners {...{number: NUM_RUNNERS, height: RUNNER_HEIGHT }}/>
    </div>

    <div style={styles.supporterFormContainer}>
      <Runners {...{number: NUM_RUNNERS, height: RUNNER_HEIGHT }}/>
      <div style={styles.supporterForm}>
        <p>Imagine there is a form here! Instead... have a GIF!</p>
        <img src={willSmith} width='400em'/>
      </div>
      <Runners {...{number: NUM_RUNNERS, height: RUNNER_HEIGHT }}/>
    </div>

  </div>;


// styles

const row = {
    height: `${HEADER_HEIGHT}em`,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
}

const blackRowContents = {
    display: 'flex',
    color: 'white',
    fontSize: '1.5em',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: '2',
}

const whiteRowContents = {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: '1em .5em 1.5em .5em',
    width: `calc(100% - ${2*MARGIN_WIDTH}em - .1em)`,
}

const styles = {
  name: {
    color: purple,
    fontWeight: 'bold',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: row,
  headerText: blackRowContents,
  descriptionContainer: row,
  nomineeDescription: whiteRowContents,
  supportersHeader: row,
  supportersHeaderText: blackRowContents,
  supportersContainer: row,
  supportersList: whiteRowContents,
  supporterFormHeader: row,
  supporterFormHeaderText: blackRowContents,
  supporterFormContainer: row,
  supporterForm: {
    ...whiteRowContents,
    flexDirection: 'column',
    alignItems: 'center',
  }
};

// for designing!!
const defaultNominee = { name: 'foo', description: 'is a good listener'};
const defaultNominator = { name: 'bar', description: 'gonna phonebank'};

// TODO: we really should access this page by nomination id
// (would allow for more performant selectors)

const mapStateToProps = (state, ownProps) => ({
  nominee: getNominee(state, ownProps.match.params.id) || defaultNominee,
  nominator: getNominator(state, ownProps.match.params.id) || defaultNominator,
});

export default connect(mapStateToProps, {})(NomineePage);
