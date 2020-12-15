import { map } from 'lodash';
import find from 'lodash/find';
import people from '../data/people.json';
import * as types from './types';

const initialState = {
  people,
  activeId: null,
  filterValue: 'ALL',
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
      console.log("filterValue-----",filterValue);
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

      const updated = find(state.people, { id: activeId })
      updated.name.first = data.first ?  data.first : updated.name.first;
      updated.name.last = data.last ? data.last : updated.name.last;
      updated.age = data.age ? data.age : updated.age ;
      updated.favoriteFruit = data.favoriteFruit ? data.favoriteFruit : updated.favoriteFruit;

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
