import { Box, FormHelperText, Stack, Typography } from '@mui/material'
import React from 'react'
import { useController } from 'react-hook-form'
import PropTypes from 'prop-types'

function SizeField(props) {
   const { control, name, label, disable, options = [] } = props
   const {
      field: { value, onChange, onBlur, ref },
      fieldState: { error }
   } = useController({
      name,
      control
   })

   return (
      <>
         {options.map(option => (
            <input
               style={{ display: 'none' }}
               key={option.value}
               type="radio"
               id={option.value}
               name={name}
               onChange={onChange}
               onBlur={onBlur}
               ref={ref}
               value={option.value}
            />
         ))}
         <Typography variant="body1">Size</Typography>
         <Stack direction={'row'}>
            {options.map(option => (
               <label
                  key={option.value}
                  htmlFor={option.value}
                  className={`size-selector ${
                     Number(value) === Number(option.value) ? 'selected' : ''
                  }`}
               >
                  {option.label}
               </label>
            ))}
         </Stack>
         <FormHelperText>{error?.message}</FormHelperText>
      </>
   )
}

SizeField.propTypes = {
   control: PropTypes.object.isRequired,
   name: PropTypes.string.isRequired,

   label: PropTypes.string,
   disable: PropTypes.bool,
   options: PropTypes.array
}

SizeField.defaultProps = {
   disable: false,
   label: '',
   options: []
}
export default SizeField
