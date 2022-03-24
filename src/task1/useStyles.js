import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(({ breakpoints, palette }) => ({
  container: {
    backgroundColor: '#FFFAF0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
