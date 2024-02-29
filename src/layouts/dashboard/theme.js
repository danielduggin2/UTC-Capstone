// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    navbar: {
      darkPrimary: '#005a8d', // Your custom color
      darkSecondary: '#007ba7', // Your custom color
      lightPrimary: '#fffefd', // Your custom color
      lightSecondary: '#daeef6', // Your custom color
    },
    // Define other custom colors and theme settings
  },
  // This is wehre other theme overrides can be defined
});

export default theme;