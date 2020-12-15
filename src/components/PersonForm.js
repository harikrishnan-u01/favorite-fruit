import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../store/selectors';
import * as actions from '../store/actions';

import {isEmpty} from 'lodash';

class PersonForm extends React.Component {
  data = {};
  render() {
    const { person } = this.props;

    console.log('ACTIVE PERSON', person);

    return <div className="form">
      <label for="form-first-name">First Name</label>
      <input id="form-first-name" className="form-input" type="text" placeholder="First Name" defaultValue={person ? person.name.first : ""} onChange={(e)=> {
        console.log("First Name changed ", e.target.value);
        this.data.first = e.target.value;
      }} />
      <label for="form-last-name">Last Name</label>
      <input id="form-last-name" className="form-input" type="text" placeholder="Last Name" defaultValue={person ? person.name.last : ""}  onChange={(e)=> {
        console.log("Last Name changed ", e.target.value);
        this.data.last = e.target.value;
      }} />
      <label for="form-age">Age</label>
      <input id="form-age" className="form-input" type="number" placeholder="Age" defaultValue={person ? person.age : 0}  onChange={(e)=> {
        console.log("Age changed ", e.target.value);
        this.data.age = e.target.value;
      }} /> 
      <label for="form-fav-fruit">Favorite Fruit</label>
      <input id="form-fav-fruit" className="form-input" type="text" placeholder="Fav Fruit" defaultValue={person ? person.favoriteFruit : ""}  onChange={(e)=> {
        console.log("Fruit changed ", e.target.value);
        this.data.favoriteFruit = e.target.value;
      }} /> 
      <input className="form-input form-button" type="submit" value="Save" onClick={()=> {
        if(!isEmpty(this.data)){
          this.props.save(this.data);
        }
      }} />
    </div>;
  }
}

export const mapStateToProps = state => {
  return {
    person: selectors.selectActivePerson(state),
  };
};

export const mapDispatchToProps = dispatch => ({
  save: data => dispatch(actions.savePerson(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PersonForm);
