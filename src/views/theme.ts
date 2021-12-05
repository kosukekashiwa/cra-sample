import { createTheme } from '@mui/material/styles';
import { blueGrey, blue, deepOrange } from '@mui/material/colors';

export const FLEXIBLE_MIN_WIDTH = 1000;
export const FLEXIBLE_MAX_WIDTH = 1200;

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: deepOrange,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minWidth: `${FLEXIBLE_MIN_WIDTH}px`,
          color: '#333333',
          backgroundColor: blueGrey[50],
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          width: '100%',
          minWidth: `${FLEXIBLE_MIN_WIDTH}px`,
          maxWidth: `${FLEXIBLE_MAX_WIDTH}px`,
          margin: 'auto',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
