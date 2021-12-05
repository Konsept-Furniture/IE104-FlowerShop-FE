import React from 'react'
import PropTypes from 'prop-types'
import { Stepper, Step, StepLabel } from '@mui/material'

OrderStep.propTypes = {
   step: PropTypes.number
}

OrderStep.defaultProps = {
   step: 0
}

const steps = [
   'Select product to checkout',
   'Fill in delivery information',
   'Purchase order'
]

function OrderStep({ step }) {
   return (
      <Stepper activeStep={step} alternativeLabel>
         {steps.map(label => (
            <Step key={label}>
               <StepLabel>{label}</StepLabel>
            </Step>
         ))}
      </Stepper>
   )
}

export default OrderStep
