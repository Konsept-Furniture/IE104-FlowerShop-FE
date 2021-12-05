import { Button, createTheme, ThemeProvider } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import React, { createRef } from 'react'
import './App.scss'
import Authorization from './components/Authorization/Authorization'
import Routes from './Routes'

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

function App() {
   const notistackRef = createRef()
   const onClickDismiss = key => () => {
      notistackRef.current.closeSnackbar(key)
   }

   return (
      <SnackbarProvider
         ref={notistackRef}
         maxSnack={1}
         preventDuplicate
         action={key => (
            <Button
               varient="text"
               onClick={onClickDismiss(key)}
               color="inherit"
            >
               Dismiss
            </Button>
         )}
      >
         <ThemeProvider theme={theme}>
            <Routes />
            {/* <Loading /> */}
            <Authorization />
         </ThemeProvider>
      </SnackbarProvider>
   )
}

export default App
