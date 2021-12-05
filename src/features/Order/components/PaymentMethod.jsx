import IconCOD from '@/assets/icons/IconCOD'
import IconPaypal from '@/assets/icons/IconPaypal'
import { PaymentMethod } from '@/constants/enum'
import {
   FormControl,
   FormControlLabel,
   Radio,
   RadioGroup,
   Stack,
   Typography
} from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import { useController } from 'react-hook-form'
import './PaymentMethod.scss'

SelectPaymentMethod.propTypes = {
   name: PropTypes.string.isRequired,
   control: PropTypes.object.isRequired
}

function SelectPaymentMethod({ name, control }) {
   const {
      field: { value, onChange }
   } = useController({
      name,
      control
   })

   return (
      <FormControl
         component="fieldset"
         className="payment-method"
         sx={{ width: '100%' }}
      >
         <RadioGroup
            row
            aria-label="payment-method"
            defaultValue={PaymentMethod.COD}
            name={name}
            value={value}
            onChange={onChange}
         >
            <FormControlLabel
               className={`payment ${
                  value === PaymentMethod.COD ? 'payment-active' : ''
               }`}
               value={PaymentMethod.COD}
               control={<Radio color="black" />}
               label={
                  <Stack direction="row" alignItems="center" spacing={2}>
                     <IconCOD width={40} />
                     <Typography variant="p" sx={{ fontSize: 18 }}>
                        Cash On Delivery
                     </Typography>
                  </Stack>
               }
               labelPlacement="end"
               sx={{ mb: 2 }}
            />
            <FormControlLabel
               className={`payment ${
                  value === PaymentMethod.PayPal ? 'payment-active' : ''
               }`}
               value={PaymentMethod.PayPal}
               control={<Radio color="black" />}
               label={
                  <Stack direction="row" alignItems="center" spacing={2}>
                     <IconPaypal width={100} />
                     <Typography variant="p" sx={{ fontSize: 18 }}>
                        PayPal
                     </Typography>
                  </Stack>
               }
               labelPlacement="end"
            />
         </RadioGroup>
      </FormControl>
   )
}

export default SelectPaymentMethod
