import { createSelector } from '@reduxjs/toolkit';

export const carouselStateSelector = (state) => state.carousel;

export const carouselSelector = createSelector(
  carouselStateSelector,
  (state) => state
);

export const carouselErrorSelector = createSelector(
  carouselStateSelector,
  (state) => state.error
);
