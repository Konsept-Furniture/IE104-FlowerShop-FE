import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'

// eslint-disable-next-line react/prop-types
function MockTheme({ children }) {
   const theme = createTheme({
      palette: {
         black: {
            main: '#000'
         }
      },
      typography: {
         fontFamily: ['Poppins', 'sans-serif'].join(',')
      },
      components: {
         MuiTabs: {
            styleOverrides: {
               indicator: {
                  backgroundColor: 'black'
               }
            }
         }
      }
   })
   return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default MockTheme
