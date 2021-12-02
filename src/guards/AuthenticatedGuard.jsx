import React, { Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { path } from '@/constants/path'
import PropTypes from 'prop-types'
import { useAuthenticated } from '@/hooks/useAuthenticated'

export default function AuthenticatedGuard({ children }) {
   const authenticated = useAuthenticated()

   if (!authenticated) {
      return <Redirect to={`${path.login}?message_code=LOGIN_REQUIRED`} />
   }

   return <Fragment>{children}</Fragment>
}
AuthenticatedGuard.propTypes = {
   children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
   ])
}
