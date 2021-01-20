import React from "react";
import { connect } from "react-redux";

import * as selectors from "../store/selectors";
import * as actions from "../store/actions";

import { isEmpty, get, debounce } from "lodash";

class PersonForm extends React.Component {
  state = {
    firstName: get(this.props.person, "name.first", ""),
    lastName: get(this.props.person, "name.last", ""),
    age: get(this.props.person, "age", ""),
    favoriteFruit: get(this.props.person, "favoriteFruit", ""),
  };
  render() {
    // const { person } = this.props;
    // console.log("ACTIVE PERSON", person);

    return (
      <form
        className="form"
        onSubmit={(event) => {
          if (!isEmpty(this.state.firstName)) {
            this.props.save(this.state);
            this.setState({
              firstName: "",
              lastName: "",
              age: "",
              favoriteFruit: "",
            });
          }
          event.preventDefault();
        }}
      >
        <div className="form-container">
          <div className="form-input-container">
            <label htmlFor="form-first-name">First Name:</label>
            <input
              id="form-first-name"
              className="form-input"
              type="text"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={(e) => {
                console.log("First Name changed ", e.target.value);
                this.setState({
                  firstName: e.target.value,
                });
              }}
            />
          </div>
          <div className="form-input-container">
            <label htmlFor="form-last-name">Last Name:</label>
            <input
              id="form-last-name"
              className="form-input"
              type="text"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={(e) => {
                console.log("Last Name changed ", e.target.value);
                this.setState({
                  lastName: e.target.value,
                });
              }}
            />
          </div>
          <div className="form-input-container">
            <label htmlFor="form-age">Age:</label>
            <input
              id="form-age"
              className="form-input"
              type="number"
              placeholder="Age"
              value={this.state.age}
              onChange={(e) => {
                console.log("Age changed ", e.target.value);
                this.setState({
                  age: e.target.value,
                });
              }}
            />
          </div>
          <div className="form-input-container">
            <label htmlFor="form-fav-fruit">Favorite Fruit:</label>
            <input
              id="form-fav-fruit"
              className="form-input"
              type="text"
              placeholder="Fav Fruit"
              value={this.state.favoriteFruit}
              onChange={(e) => {
                console.log("Fruit changed ", e.target.value);
                this.setState({
                  favoriteFruit: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div>
          <input
            className="form-input form-button"
            type="submit"
            value="Save"
          />
        </div>
      </form>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    person: selectors.selectActivePerson(state),
  };
};

export const mapDispatchToProps = (dispatch) => ({
  save: (data) => dispatch(actions.savePerson(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonForm);
