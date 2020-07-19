import {createSelector} from 'reselect';

const getFilters = (state) => state.products.filters;

export const getFilterSelector = createSelector(
  [getFilters],
  (filters) => filters,
);
