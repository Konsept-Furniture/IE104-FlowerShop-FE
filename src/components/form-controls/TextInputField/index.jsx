import React from 'react'
import PropTypes from 'prop-types'
import { Controller } from 'react-hook-form'
import { TextField } from '@mui/material'

TextInputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool
}

function TextInputField (props) {
  const { form, name, label, disable, ...restProps } = props
  const { control } = form

  return (
      <Controller
         name={name}
         control={control}
         render={({ field, fieldState: { invalid, error } }) => (
            <TextField
               {...field}
               margin="normal"
               variant="outlined"
               fullWidth
               label={label}
               error={invalid}
               helperText={error ? error.message : null}
               disabled={disable}
               {...restProps}
            />
         )}
      />
  )
}

export default TextInputField
