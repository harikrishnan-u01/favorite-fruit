import { createSelector } from 'reselect';
import find from 'lodash/find';
import filter from 'lodash/filter';

export const selectPeople = state => state.people;
export const selectActiveId = state => state.activeId;
export const selectFilterValue = state => state.filterValue;

export const selectActivePerson = createSelector(
  selectPeople,
  selectActiveId,
  (people, activeId) => find(people, { id: activeId }),
);

export const selectFilteredPeople = createSelector(
  selectPeople,
  selectFilterValue,
  (people,filterValue)  => {
    // Add Filter Logic Here
    console.log("filterValue+++",filterValue);
    return filterValue !== "ALL" ? filter(people, { favoriteFruit: filterValue }) : people;
  },
);
