import {createMuiTheme} from "@material-ui/core"


const theme = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    backgroundColor: "#000",
                    fontFamily: 'ProximaNova, sans-serif',
                    color: '#fff',
                },
            }
        },
        MuiButton: {
            root: {
                background: 'linear-gradient(315deg, #a1052c 0%, #0750d0 100%)',
                borderRadius: 0,
                border: 0,
                color: 'white',
                textTransform: 'none',
                fontSize: '18px',
                fontWeight: 600,
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
        },
        body2: {
            fontFamily: 'ProximaNova, sans-serif',
        },
        h1: {
            fontFamily: 'Raleway, sans-serif'
        },
        h2: {
            fontFamily: 'Raleway, sans-serif'
        },
        h3: {
            fontFamily: 'Raleway, sans-serif'
        },
        h4: {
            fontFamily: 'Raleway, sans-serif'
        },
        h5: {
            fontFamily: 'Raleway, sans-serif'
        },
        h6: {
            fontFamily: 'Raleway, sans-serif'
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
