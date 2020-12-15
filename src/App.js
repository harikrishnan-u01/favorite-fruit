import React from 'react';
import { connect } from 'react-redux';

import * as selectors from './store/selectors';

import PeopleList from './components/PeopleList';
import PersonForm from './components/PersonForm';

import './styles.css';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="app">
          <PeopleList />
          <PersonForm key={this.props.activeId || 'BLANK'} />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    activeId: selectors.selectActiveId(state),
  };
};

export default connect(mapStateToProps)(App);
