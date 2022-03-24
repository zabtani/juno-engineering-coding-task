import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetch_all_carousel_images,
  fetch_image_urls,
} from '../../redux/carousel/carousel-actions';
import { carouselActions } from '../../redux/carousel/carousel-reducer';
import { carouselStateSelector } from '../../redux/carousel/carousel-selector';

const useCurrentImage = ({ idx }) => {
  const dispatch = useDispatch();
  const { loading, currentImage, loadedImages, urls } = useSelector(
    carouselStateSelector
  );

  useEffect(() => {
    if (loadedImages[idx]) {
      dispatch(carouselActions.setCurrent(loadedImages[idx])); //SET LOADED ONE
    } else if (urls) {
      new Promise((resolve) => {
        let image = new Image();
        image.src = urls[idx];
        image.onload = () => {
          resolve(dispatch(carouselActions.setCurrent(image))); //LOAD ONE IF NOT LOADED
        };
      });
    }
  }, [dispatch, idx, loadedImages, urls]);

  useEffect(() => {
    dispatch(fetch_image_urls()); //FETCH IMAGES DATA
    dispatch(fetch_all_carousel_images());
  }, [dispatch]);

  return { image: currentImage, isLoading: loading, count: urls.length };
};

export default useCurrentImage;
