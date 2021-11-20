import { createTheme } from '@mui/material';
import { blueGrey, green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minWidth: '1366px',
          minHeight: '768px',
          backgroundColor: blueGrey[50],
        },
      },
    },
  },
});

export default theme;
