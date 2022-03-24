import React, { useState } from 'react';
import { useStyles } from './useStyles';
import { Card } from '@mui/material';
import { useDispatch } from 'react-redux';
import { carouselActions } from '../../redux/carousel/carousel-reducer';
import useCurrentImage from '../hooks/useCurrentImage';
import NavigationButton from './NavigationButton';

const Carousel = () => {
  const classes = useStyles();
  const [idx, setIdx] = useState(0);
  const dispatch = useDispatch();
  const { isLoading, image, count } = useCurrentImage({ idx }); //TAKE CARE OF IMG INDEX CHANGING STATE.

  const goForwards = () => {
    const index = idx === count - 1 ? 0 : idx + 1;
    go(index);
  };

  const goBackwards = () => {
    const index = idx === 0 ? count - 1 : idx - 1;
    go(index);
  };

  const go = (index) => {
    dispatch(carouselActions.setLoading());
    setIdx(index);
  };

  const backgroundImage = isLoading || !image ? '' : `url(${image.currentSrc})`;
  const loadingText = isLoading
    ? 'Loading...'
    : !count
    ? 'Fetching URLS...'
    : '';

  return (
    <Card elevation={8} className={classes.carousel}>
      <div className={classes.carouselInner} style={{ backgroundImage }}>
        <NavigationButton onClick={goBackwards} className={classes.left} />
        <div className={classes.center}>
          <div className={classes.loading}>{loadingText}</div>
          <div className={classes.count}>{`${idx + 1}/${count}`}</div>
        </div>
        <NavigationButton onClick={goForwards} className={classes.right} />
      </div>
    </Card>
  );
};

export default Carousel;
