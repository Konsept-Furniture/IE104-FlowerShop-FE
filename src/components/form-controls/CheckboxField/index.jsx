/* eslint-disable indent */
import {
   Checkbox,
   FormControl,
   FormControlLabel,
   FormHelperText
} from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import { useController } from 'react-hook-form'

CheckboxField.propTypes = {
   name: PropTypes.string.isRequired,
   control: PropTypes.object.isRequired,
   label: PropTypes.string,
   disabled: PropTypes.bool
}

CheckboxField.defaultProps = {
   label: '',
   placeholder: '',
   disabled: false
}

function CheckboxField({ name, control, label, disabled }) {
   const {
      field: { value, onChange },
      fieldState: { invalid, error }
   } = useController({
      name,
      control
   })

   return (
      <FormControl
         fullWidth
         variant="outlined"
         margin="normal"
         disabled={disabled}
         error={invalid}
      >
         <FormControlLabel
            label={label}
            color="black"
            control={
               <Checkbox
                  checked={value}
                  onChange={onChange}
                  name={name}
                  color="black"
               />
            }
         />
         <FormHelperText>{error?.message}</FormHelperText>
      </FormControl>
   )
}

export default CheckboxField
