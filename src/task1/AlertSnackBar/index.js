import { Alert, Snackbar } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { carouselActions } from '../../redux/carousel/carousel-reducer';
import { carouselErrorSelector } from '../../redux/carousel/carousel-selector';

const AlertSnackBar = () => {
  const error = useSelector(carouselErrorSelector);
  const [alertReason, setAlertReason] = useState('');
  const dispatch = useDispatch();

  const handleError = useCallback(
    (msg) => {
      setAlertReason(msg);
      dispatch(carouselActions.clearError());
    },
    [dispatch]
  );

  useEffect(() => {
    if (error) handleError(error);
  }, [error, handleError, dispatch]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setAlertReason('');
  };

  return (
    <Snackbar
      open={!!alertReason}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={'error'} sx={{ width: '100%' }}>
        {alertReason}
      </Alert>
    </Snackbar>
  );
};
export default AlertSnackBar;
