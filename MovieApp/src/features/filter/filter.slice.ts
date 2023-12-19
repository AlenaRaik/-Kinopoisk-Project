import { FilterSmall, FilterBig } from '#ui/cards/card-props';
import { createSlice } from '@reduxjs/toolkit';

export const FilterSlice = createSlice({
  name: 'FilterSlice',
  initialState: {
    filtersFilm: {
      total: 0,
      totalPages: 0,
      items: [],
    } as FilterBig,
    filterIsActive: false,
    filters: {
      order: 'RATING',
      keyword: '',
      ratingFrom: 0,
      ratingTo: 10,
      yearFrom: 1000,
      yearTo: 3000,
      page: 1,
    },
  },
  reducers: {
    getFilters(state, action: { payload: FilterSmall }) {
      state.filters.order = action.payload.order;
      state.filters.keyword = action.payload.keyword;
      state.filters.ratingFrom = action.payload.ratingFrom;
      state.filters.ratingTo = action.payload.ratingTo;
      state.filters.yearFrom = action.payload.yearFrom;
      state.filters.yearTo = action.payload.yearTo;
      state.filters.page = action.payload.page;
    },
    getFiltersSuccess(state, action: { payload: FilterBig }) {
      const itemsArr = [...state.filtersFilm.items, ...action.payload.items];
      state.filtersFilm = { ...action.payload, items: itemsArr };
      console.log('filtersMovie', state.filtersFilm);
    },
    resetFilter(state) {
      state.filtersFilm.items = [];
      state.filtersFilm.items.length = 0;
    },
    setFilterIsActive(state, action: { payload: boolean }) {
      state.filterIsActive = action.payload;
    },
  },
});

export const {
  actions: {
    getFilters,
    getFiltersSuccess,
    resetFilter,
    setFilterIsActive,
  },
  reducer: FilterReducer,
} = FilterSlice;
