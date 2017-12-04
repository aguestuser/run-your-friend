import React from 'react';
import {connect} from 'react-redux';
import {getNominee, getNominator} from '../redux/reducers/nominees';
import Runners from './Runners';
import GithubLink from './GithubLink';
import {purpleA200 as purple} from 'material-ui/styles/colors';
import willSmith from '../img/running-will-smith.gif';

const NBSP = '\u00a0'
const runner = () => <Runners {...{number: 1, height: 4 }}/>

let NomineePage = ({nominee, nominator}) =>
  <div style={styles.container}>

    <div style={styles.header}>
      {runner()}
      <div style={styles.headerText}>
        <span style={styles.name}>{nominator.name}</span>
        {NBSP}thinks{NBSP}
        <span style={styles.name}>{nominee.name }</span> {NBSP}should run because:
      </div>
    </div>

    <div style={styles.descriptionContainer}>
      {runner()}
      <div style={styles.nomineeDescription}>
        {nominee.description}
      </div>
    </div>

    <div style={styles.supportersHeader}>
      {runner()}
      <div style={styles.supportersHeaderText}>
        <span style={styles.name}>{nominee.name}</span>{NBSP}is suported by:{NBSP}
      </div>
    </div>

    <div style={styles.supportersContainer}>
      {runner()}
      <div style={styles.supportersList}>
        <ul>
          <li>
            <span style={styles.name}>{nominator.name}</span>{NBSP}({nominator.description}){NBSP}
          </li>
        </ul>
      </div>
    </div>

    <div style={styles.supporterFormHeader}>
      {runner()}
      <div style={styles.supporterFormHeaderText}>
        Will{NBSP}<span style={styles.name}>you</span>{NBSP}add your support?
      </div>
    </div>

    <div style={styles.supporterFormContainer}>
      {runner()}
      <div style={styles.supporterForm}>
        <p>Imagine there is a form here! Instead... have a GIF!</p>
        <img src={willSmith} width='100%'/>
        <GithubLink/>
      </div>
    </div>
    
  </div>;
        


// styles

const row = {
  display: 'flex',
  flexDirection: 'row',
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

const styles = {
  name: {
    color: purple,
    fontWeight: 'bold',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
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
  supporterForm: whiteRowContents,
  /* {
   *   ...whiteRowContents,
   *   flexDirection: 'column',
   *   alignItems: 'center',
   * }*/
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
