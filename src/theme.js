import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#af55d6',
    },
    secondary: {
      main: '#fff',
    },
    error: {
      main: red.A400,
    },
    background: {
      // default: '#FFFFF0',
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage:
            "url(https://helpdeskgeek.com/wp-content/pictures/2019/08/gpx-to-google-maps-main.jpg.webp)",
          backgroundSize: 'cover'
        }
      }
    }
  }
});

export default theme;