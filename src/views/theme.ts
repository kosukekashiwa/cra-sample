import { createTheme } from '@mui/material/styles';
import { blueGrey, blue, deepOrange } from '@mui/material/colors';

export const SCREEN_WIDTH = 1200;

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: deepOrange,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minWidth: `${SCREEN_WIDTH}px`,
          color: '#333333',
          backgroundColor: blueGrey[50],
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          width: `${SCREEN_WIDTH}px`,
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
