import React from 'react'
import PropTypes from 'prop-types'

import './Button.scss'

const Button = ({ className, onClick, children }) => {
  return (
        <button
            className={`btn ${className}`}
            onClick={onClick ? () => onClick() : null}
        >
            {children}
        </button>
  )
}

export const OutlinedButton = props => {
  return (
        <Button
            className={`btn-outlined ${props.className}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </Button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func
}

export default Button
