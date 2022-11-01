import { createTheme } from '@mui/material';

const baseTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 780,
      lg: 992,
      xl: 1200,
      xxl: 1536,
    },
  },

  shape: {
    borderRadius: 12,
  },

  typography: {
    fontFamily: 'Montserrat',
  },

  zIndex: {
    appBar: 1300,
  },

  transitions: {
    duration: {
      loadingScreen: 800,
    },
  },
});

const mixinTheme = createTheme(baseTheme, {
  mixins: {
    navbar: {
      display: 'flex',
      justifyContent: 'flex-end',
      height: '64px',
      padding: baseTheme.spacing(0, 2),
    },
  },
});

const createColor = (color) => mixinTheme.palette.augmentColor({ color: { main: color } });

const lightTheme = createTheme(mixinTheme, {
  palette: {
    background: {
      default: '#fafafa',
    },
    primary: {
      ...createColor('#243221'),
      contrastText: baseTheme.palette.common.white,
    },
    secondary: createColor('#828074'),
  },
});

export default lightTheme;
