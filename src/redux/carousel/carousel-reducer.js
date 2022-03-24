import { createSlice } from '@reduxjs/toolkit';
import {
  fetch_all_carousel_images,
  fetch_image_urls,
} from './carousel-actions';

const initialState = {
  loading: false,
  error: '',
  currentImage: null,
  loadedImages: [],
  urls: [],
};

export const carouselSlice = createSlice({
  name: 'carousel',
  initialState,

  reducers: {
    setLoading: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    setCurrent: (state, action) => {
      return {
        ...state,
        loading: false,
        currentImage: action.payload,
      };
    },
    clearError: (state) => {
      return {
        ...state,
        error: '',
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetch_all_carousel_images.fulfilled, (state, action) => {
      state.loadedImages = action.payload;
      state.loading = false;
    });

    builder.addCase(fetch_all_carousel_images.pending, (state) => {
      state.loading = false;
    });

    builder.addCase(fetch_all_carousel_images.rejected, (state) => {
      state.error = 'error loading imgs';
      state.loading = false;
    });

    builder.addCase(fetch_image_urls.fulfilled, (state, action) => {
      state.urls = action.payload;
      state.loading = false;
    });

    builder.addCase(fetch_image_urls.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetch_image_urls.rejected, (state) => {
      state.error = 'error fetching urls';
      state.loading = false;
    });
  },
});
export const carouselActions = carouselSlice.actions;
export default carouselSlice.reducer;
