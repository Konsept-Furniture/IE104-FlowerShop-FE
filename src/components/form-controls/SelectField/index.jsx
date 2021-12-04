/* eslint-disable multiline-ternary */
/* eslint-disable indent */
import React from 'react'
import PropTypes from 'prop-types'
import { useController } from 'react-hook-form'

import {
   FormHelperText,
   MenuItem,
   Select,
   FormControl,
   InputLabel
} from '@mui/material'

SelectField.propTypes = {
   name: PropTypes.string.isRequired,
   control: PropTypes.object.isRequired,
   label: PropTypes.string,
   disabled: PropTypes.bool,
   options: PropTypes.array,
   customHandleChange: PropTypes.func
}

SelectField.defaultProps = {
   label: '',
   placeholder: '',
   disabled: false,
   options: []
}

function SelectField({
   name,
   control,
   label,
   disabled,
   options,
   customHandleChange
}) {
   const {
      field: { value, onChange, onBlur },
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
         <InputLabel id={`${name}_label`} color="black">
            {label}
         </InputLabel>
         <Select
            labelId={`${name}_label`}
            label={label}
            value={value}
            onChange={e => {
               onChange(e)
               if (customHandleChange) {
                  customHandleChange(e)
               }
            }}
            onBlur={onBlur}
            color="black"
         >
            {options.length > 0
               ? options.map(option => (
                    <MenuItem
                       key={option.value}
                       value={option.value}
                       name={option.label}
                    >
                       {option.label}
                    </MenuItem>
                 ))
               : null}
         </Select>

         <FormHelperText>{error?.message}</FormHelperText>
      </FormControl>
   )
}

export default SelectField
