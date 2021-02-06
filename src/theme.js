import {createMuiTheme} from "@material-ui/core"


const theme = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    backgroundColor: "#000",
                    fontFamily: 'ProximaNova, sans-serif',
                },
            }
        },
        MuiButton: {
            root: {
                background: 'linear-gradient(45deg, #9a50fc 5%, #0750d0 95%)',
                borderRadius: 0,
                border: 0,
                color: 'white',
                textTransform: 'none',
                fontSize: '18px',
                fontWeight: 600,
            },
            text: {
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
        fontFamily: 'ProximaNova, sans-serif',
        color: '#fff',
        lineHeight: 1,
        h3: {
            color: '#fff',
            lineHeight: 1,
        }
    },
})

export default theme
