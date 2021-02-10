import { createMuiTheme } from '@material-ui/core'


const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#000',
          fontFamily: 'ProximaNova, sans-serif',
          color: '#fff',
          overflowX: 'hidden',
        },
        a: {
          textDecoration: 'none'
        }
      }
    },
    MuiButton: {
      root: {
        background: 'linear-gradient(90deg, rgba(84,18,148,1) 3%, rgba(50,84,164,1) 27%, rgba(34,28,134,1) 100%)',
        borderRadius: 0,
        border: 0,
        color: '#fff',
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: 600,
        transition: '.2s',
      },
      text: {
        fontFamily: 'Poppins, sans-serif',
        padding: '8px 20px',
      }
    },
    MuiContainer: {
      root: {
        '@media (min-width: 1280px)': {
          maxWidth: '1200px'
        },
      },
      maxWidthLg: {
        '@media (min-width: 1280px)': {
          maxWidth: '1200px'
        },
      }
    }
  },
  typography: {
    body1: {
      fontFamily: 'ProximaNova, sans-serif',
      color: '#fff',
    },
    body2: {
      fontFamily: 'ProximaNova, sans-serif',
      color: '#fff',
    },
    h1: {
      fontFamily: 'Raleway, sans-serif',
      color: '#fff',
    },
    h2: {
      fontFamily: 'Raleway, sans-serif',
      color: '#fff',
    },
    h3: {
      fontFamily: 'Raleway, sans-serif',
      color: '#fff',
    },
    h4: {
      fontFamily: 'Raleway, sans-serif',
      color: '#fff',
    },
    h5: {
      fontFamily: 'Raleway, sans-serif',
      color: '#fff',
    },
    h6: {
      fontFamily: 'Raleway, sans-serif',
      color: '#fff',
    },
  },
  palette: {
    primary: {
      main: '#0750d0'
    },
    secondary: {
      main: '#9a50fc'
    }
  }
})

export default theme
