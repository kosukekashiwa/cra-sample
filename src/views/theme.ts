import { createTheme } from '@mui/material';
import { blueGrey, cyan, deepOrange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: cyan,
    secondary: deepOrange,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minWidth: '1366px',
          minHeight: '768px',
          color: '#333333',
          backgroundColor: blueGrey[50],
        },
      },
    },
  },
});

export default theme;
