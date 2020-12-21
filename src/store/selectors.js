import { createSelector } from "reselect";
import { isEmpty, filter, find } from "lodash";

export const selectPeople = (state) => state.people;
export const selectActiveId = (state) => state.activeId;
export const selectFilterValue = (state) => state.filterValue;

export const selectActivePerson = createSelector(
  selectPeople,
  selectActiveId,
  (people, activeId) => find(people, { id: activeId })
);

export const selectFilteredPeople = createSelector(
  selectPeople,
  selectFilterValue,
  (people, filterValue) => {
    // Add Filter Logic Here
    console.log("filterValue+++", filterValue);
    const filteredPersons =
      filterValue !== "ALL"
        ? filter(people, { favoriteFruit: filterValue })
        : people;
    const sortedPersons = isEmpty(filteredPersons)
      ? filteredPersons
      : filteredPersons.sort((a, b) => {
          if (a.name.first.toLowerCase() < b.name.first.toLowerCase()) {
            return -1;
          }
          if (a.name.first.toLowerCase() > b.name.first.toLowerCase()) {
            return 1;
          }
          return 0;
        });
    return sortedPersons;
  }
);
