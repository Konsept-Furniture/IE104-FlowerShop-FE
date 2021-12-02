import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'
import './Button.scss'

const PrimaryButton = props => {
   const { children, onClick, ...restProps } = props
   return (
      <Button
         sx={{
            px: 5,
            textTransform: 'none',
            fontFamily: 'EB Garamond',
            fontSize: '18px',
            fontWeight: 400,
            fontStyle: 'italic',
            border: '1px solid black',
            backgroundColor: '#000',
            color: 'white'
         }}
         color="black"
         variant="contained"
         onClick={onClick}
         {...restProps}
      >
         {children}
      </Button>
   )
}

export const OutlinedButton = props => {
   const { children, onClick, ...restProps } = props
   return (
      <Button
         sx={{
            px: 5,
            textTransform: 'none',
            fontFamily: 'EB Garamond',
            fontSize: '18px',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'black',
            backgroundColor: 'transparent'
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

PrimaryButton.propTypes = {
   onClick: PropTypes.func,
   children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
   ])
}
OutlinedButton.propTypes = {
   onClick: PropTypes.func,
   children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
   ])
}

export default PrimaryButton
