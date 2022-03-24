import { useStyles } from './useStyles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const NavigationButton = ({ className, onClick }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.buttonContainer} ${className}`}>
      <button onClick={onClick}>
        {className === classes.right ? (
          <ChevronRightIcon />
        ) : (
          <ChevronLeftIcon />
        )}
      </button>
    </div>
  );
};

export default NavigationButton;
