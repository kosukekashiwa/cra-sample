import { createTheme } from '@mui/material/styles';
import { blueGrey, blue, deepOrange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: deepOrange,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minWidth: '1366px',
          color: '#333333',
          backgroundColor: blueGrey[50],
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          width: '1200px',
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
