import Carousel from './Carousel';
import { useStyles } from './useStyles';

const ImageCarousel = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Carousel />
    </div>
  );
};
export default ImageCarousel;
