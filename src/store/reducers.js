// import { map } from 'lodash';
import find from "lodash/find";
import people from "../data/people.json";
import * as types from "./types";

const initialState = {
  people,
  activeId: null,
  filterValue: "ALL",
};

function addReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.SET_ACTIVE_ID: {
      const activeId = payload.id;

      return {
        ...state,
        activeId,
      };
    }
    case types.FILTER_PEOPLE: {
      const filterValue = payload.filterValue;
      console.log("filterValue-----", filterValue);
      return {
        ...state,
        filterValue,
      };
    }
    case types.SAVE_PERSON: {
      const activeId = state.activeId;
      const data = payload.data;

      // Save data for active person
      console.log("data---", data);

      let updated = find(state.people, { id: activeId });

      if (!updated) {
        updated = { name: {} };
      }

      updated.name.first = data.firstName;
      updated.name.last = data.lastName;
      updated.age = data.age;
      updated.favoriteFruit = data.favoriteFruit;

      return {
        ...state,
        updated,
      };
    }
    default:
      return state;
  }
}

export default addReducer;
