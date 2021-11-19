import { createTheme, ThemeProvider } from '@mui/material'
import React from 'react'
import './App.scss'
import Authorization from './components/Authorization/Authorization'
import Routes from './Routes'

const theme = createTheme({
   palette: {
      black: {
         main: '#000'
      }
   }
})

function App() {
   return (
      <ThemeProvider theme={theme}>
         <Routes />
         {/* <Loading /> */}
         <Authorization />
      </ThemeProvider>
   )
}

export default App
