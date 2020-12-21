import React from "react";
import { connect } from "react-redux";

// (Optional) Select component
import Select from "react-select";

import * as selectors from "../store/selectors";
import * as actions from "../store/actions";

// Options for select
const FRUITS = ["ALL", "banana", "strawberry", "apple"];

class PeopleList extends React.Component {
  selectOptions = this.getOptions();
  getOptions() {
    return FRUITS.map((fruit) => {
      return { value: fruit, label: fruit };
    });
  }

  render() {
    const { people } = this.props;

    console.log("PEOPLE", people);

    return (
      <div className="list">
        <Select
          className="fruit-filter"
          label="Favorite Fruit"
          defaultValue={this.selectOptions[0]}
          options={this.selectOptions}
          onChange={(e) => {
            console.log("selected target", e.value);
            this.props.filter(e.value);
          }}
        />

        <div className="list-contents">
          <ul
            onClick={(e) => {
              console.log("Clicked LI", e.target.id);
              if (e.target.id) {
                this.props.setActiveId(e.target.id);
              }
            }}
          >
            {people.map((single) => {
              return (
                <li key={single.id} id={single.id}>
                  {single.name.first} {single.name.last}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    people: selectors.selectFilteredPeople(state),
    activeId: selectors.selectActiveId(state),
  };
};

export const mapDispatchToProps = (dispatch) => ({
  filter: (filterValue) => dispatch(actions.filterPeople(filterValue)),
  setActiveId: (id) => dispatch(actions.setActiveId(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
