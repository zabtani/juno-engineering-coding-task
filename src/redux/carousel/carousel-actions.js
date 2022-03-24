import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchImages, fetchImageUrls } from '../../api';

export const fetch_all_carousel_images = createAsyncThunk(
  'carousel/fetchAllCarouselImages',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchImages();
      const loadedImages = data.map(
        (url) =>
          new Promise((resolve, reject) => {
            let image = new Image();
            image.src = url;
            image.onload = () => {
              resolve(image);
            };
          })
      );
      return Promise.all(loadedImages);
    } catch (err) {
      return rejectWithValue('ERR/fetchAllCarouselImages');
    }
  }
);

export const fetch_image_urls = createAsyncThunk(
  'carousel/fetchImageUrls',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchImageUrls();
      return data;
    } catch (err) {
      return rejectWithValue('ERR/fetchImageUrls');
    }
  }
);
