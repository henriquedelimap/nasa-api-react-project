import { createTheme } from "@mui/material";


const theme = createTheme({
    palette: {
        background: {
            default: '#303134',
            paper: '#3d3d3d',

        },
        text: {
            primary: '#fafafa'
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: 'transparent',
                    width: 'auto',
                    left: 'auto',
                    right: 'auto',
                    backdropFilter: 'blur(30px)',
                    borderRadius: '24px'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    background: 'transparent',
                    borderRadius: '24px',
                    color: '#fafafa',
                    textTransform: 'lowercase'
                }
            }
        }
    }
})


export default theme