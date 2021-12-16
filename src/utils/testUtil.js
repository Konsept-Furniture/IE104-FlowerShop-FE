import { shallow, mount } from 'enzyme'
import { SnackbarProvider } from 'notistack'
import { BrowserRouter as Router } from 'react-router-dom'

export const renderApp = Component => {
   return shallow(
      <SnackbarProvider>
         <Router>{Component}</Router>
      </SnackbarProvider>
   )
}
