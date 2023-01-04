/* eslint-disable multiline-ternary */
import IconDeliveryTruck from '@/assets/icons/IconDeliveryTruck'
import IconProcessing from '@/assets/icons/IconProcessing'
import IconRefund from '@/assets/icons/IconRefund'
import IconShoppingBag from '@/assets/icons/IconShoppingBag'
import IconWallet from '@/assets/icons/IconWallet'
import { OrderStatus } from '@/constants/enum'
import { Step, StepLabel, Stepper } from '@mui/material'
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

OrderTrackingStepper.propTypes = {
   order: PropTypes.object.isRequired
}

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
   backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
   zIndex: 1,
   color: '#fff',
   width: 50,
   height: 50,
   display: 'flex',
   borderRadius: '50%',
   justifyContent: 'center',
   alignItems: 'center',
   ...(ownerState.active && {
      backgroundImage:
         'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
   }),
   ...(ownerState.completed && {
      backgroundImage:
         'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)'
   })
}))
ColorlibStepIcon.propTypes = {
   /**
    * Whether this step is active.
    * @default false
    */
   active: PropTypes.bool,
   className: PropTypes.string,
   /**
    * Mark the step as completed. Is passed to child components.
    * @default false
    */
   completed: PropTypes.bool,
   /**
    * The label displayed in the step icon.
    */
   icon: PropTypes.node
}
function ColorlibStepIcon(props) {
   const { icon, active, completed, className } = props

   const icons = {
      1: <IconShoppingBag width={30} />,
      2: <IconWallet width={30} />,
      3: <IconProcessing width={30} />,
      4: <IconDeliveryTruck width={40} />,
      5: <IconRefund width={30} />
   }

   return (
      <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
         {icons[String(icon)]}
      </ColorlibStepIconRoot>
   )
}
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
   [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22
   },
   [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
         backgroundImage:
            'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)'
      }
   },
   [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
         backgroundImage:
            'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)'
      }
   },
   [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderRadius: 1
   }
}))
const steps = {
   0: 'Created order',
   1: 'Confirm payment method',
   2: 'Processing',
   3: 'Deliveried'
}
function OrderTrackingStepper({ order }) {
   const activeStep = OrderStatus[order.status]
   const currentSteps = {
      ...steps,
      3: order.status === 'REFUNDED' ? 'Refunded' : 'Deliveried'
   }

   return (
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
         {Object.entries(currentSteps).map(([key, value]) => (
            <Step key={key}>
               <StepLabel
                  StepIconComponent={ColorlibStepIcon}
                  StepIconProps={{
                     icon: (() => {
                        if (value === 'Refunded') {
                           return Number.parseInt(key) + 2
                        }

                        return Number.parseInt(key) + 1
                     })()
                  }}
                  error={Number.parseInt(key) === 1 && activeStep === 1}
               >
                  {value}
                  {Number.parseInt(key) === 1 && activeStep === 1 && (
                     <Link to={`order/${order._id}`} style={{ textDecoration: 'underline' }}>
                        {' '}
                        HERE
                     </Link>
                  )}
               </StepLabel>
            </Step>
         ))}
      </Stepper>
   )
}

export default OrderTrackingStepper
