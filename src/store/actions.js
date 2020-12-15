import * as types from './types';

export const setActiveId = id => ({
  type: types.SET_ACTIVE_ID,
  payload: {
    id,
  },
});

export const filterPeople = filterValue => ({
  type: types.FILTER_PEOPLE,
  payload: {
    filterValue,
  },
});

export const savePerson = data => ({
  type: types.SAVE_PERSON,
  payload: {
    data,
  },
});
