"use client"
import { createTheme, responsiveFontSizes } from "@mui/material"
import CssBaseline from "@mui/material"

const theme = createTheme({
    palette: {
        primary: {
            main: "#142431"
        },
        secondary: {
            main: "#0cdbea"
        },
        white:{
            main: "#ededed"
        }
    },
    typography: {
        fontFamily: [
            "Poppins",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
        h1: {
            lineHeight: 1.2,
            fontSize: 60,
            fontWeight: 600
        },
        h2: {
            lineHeight: 1.2,
            fontSize: 44,
            fontWeight: 600
        },
        h3: {
            lineHeight: 1.2,
            fontSize: 38,
            fontWeight: 600
        },
        h4: {
            lineHeight: 1.2,
            fontSize: 32,
            fontWeight: 600
        },
        h5: {
            lineHeight: 1.2,
            fontSize: 26,
            fontWeight: 600
        },
        h6: {
            lineHeight: 1.2,
            fontSize: 20,
            fontWeight: 600
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h1',
                    h2: 'h2',
                    h3: 'h3',
                    h4: 'h4',
                    h5: 'h5',
                    h6: 'h6',
                    subtitle1: 'h2',
                    subtitle2: 'h2',
                    body1: 'p',
                    body2: 'span',
                }
            }
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            xxl: 1836
        }
    }
})

const themeResponsive = responsiveFontSizes(theme)

export default themeResponsive