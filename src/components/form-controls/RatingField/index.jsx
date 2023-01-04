import { FormControl, FormHelperText, Rating, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { useController } from 'react-hook-form'
import React from 'react'
const RatingField = props => {
   const { control, name, label, disable } = props
   const {
      field: { value, onChange, onBlur, ref },
      fieldState: { error }
   } = useController({
      name,
      control
   })

   return (
      <FormControl fullWidth variant="outlined" margin="none" disabled={disable} error={!!error}>
         <Typography color={'GrayText'}>{label}</Typography>
         <Rating
            ref={ref}
            disabled={disable}
            name={name}
            value={value}
            onChange={(_, newValue) => {
               onChange(newValue)
            }}
            onBlur={onBlur}
         />
         <FormHelperText>{error?.message}</FormHelperText>
      </FormControl>
   )
}

RatingField.propTypes = {
   control: PropTypes.object.isRequired,
   name: PropTypes.string.isRequired,

   label: PropTypes.string,
   disable: PropTypes.bool
}

RatingField.defaultProps = {
   disable: false,
   label: ''
}
export default RatingField
