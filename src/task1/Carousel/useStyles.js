import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(({ breakpoints, palette }) => ({
  carousel: {
    position: 'relative',
    width: '800px',
    height: '400px',
    backgroundColor: 'black',
  },

  carouselInner: {
    backgroundColor: '#F5F5F5',
    height: '100%',
    width: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 100%',
    display: 'flex',
  },
  buttonContainer: {
    '& button': {
      padding: 0,
      border: 'none',
      backgroundColor: 'transparent',
      color: 'white',
      cursor: 'pointer',
    },
    '& svg': {
      '&:hover': {
        backgroundColor: 'rgb(0, 0, 0, 0.8)',
      },
      backgroundColor: 'rgb(0, 0, 0, 0.6)',
      width: '60px',
      height: '60px',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  left: {
    '& svg': {
      borderRadius: '0 10px 10px 0',
    },
  },
  right: {
    '& svg': {
      borderRadius: '10px 0 0 10px',
    },
  },
  count: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    fontSize: '1rem',
    backgroundColor: 'rgb(255, 255, 255, 0.8)',
    padding: '1%',
    borderRadius: '0 10px 0 0',
  },
  center: {
    flex: '80%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  loading: {
    fontWeight: 600,
    padding: '2%',
  },
}));
