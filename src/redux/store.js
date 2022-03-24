import { configureStore } from '@reduxjs/toolkit';
import carouselReducer from './carousel/carousel-reducer';
export default configureStore({
  reducer: {
    carousel: carouselReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
