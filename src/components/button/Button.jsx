import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'
import './Button.scss'

export const OutlinedButton = (props) => {
   const { children, onClick, ...restProps } = props
   return (
      <Button
         sx={{
            py: 1.3,
            px: 6,
            textTransform: 'none',
            fontFamily: 'EB Garamond',
            fontSize: '18px',
            fontWeight: 400,
            fontStyle: 'italic',

            '&': {
               backgroundColor: 'transparent'
            }
         }}
         color="black"
         variant="outlined"
         onClick={onClick}
         {...restProps}
      >
         {children}
      </Button>
   )
}

OutlinedButton.propTypes = {
   onClick: PropTypes.func,
   children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
   ])
}

export default Button
