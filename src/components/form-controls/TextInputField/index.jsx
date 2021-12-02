import React from 'react'
import PropTypes from 'prop-types'
import { useController } from 'react-hook-form'
import { TextField } from '@mui/material'

TextInputField.propTypes = {
   control: PropTypes.object.isRequired,
   name: PropTypes.string.isRequired,

   label: PropTypes.string,
   color: PropTypes.string,
   disable: PropTypes.bool
}

TextInputField.defaultProps = {
   disable: false,
   label: '',
   color: 'black'
}

function TextInputField(props) {
   const { control, name, label, disable, color, ...restProps } = props
   const {
      field: { value, onChange, onBlur, ref },
      fieldState: { invalid, error }
   } = useController({
      name,
      control
   })
   return (
      <TextField
         fullWidth
         margin="normal"
         variant="outlined"
         value={value}
         onChange={onChange}
         onBlur={onBlur}
         label={label}
         inputRef={ref}
         error={invalid}
         helperText={error?.message}
         disabled={disable}
         color={color || 'black'}
         {...restProps}
      />
   )
}

export default TextInputField
