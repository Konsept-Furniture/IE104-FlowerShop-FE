import React, { useEffect } from 'react'
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { payOrder } from '@/features/Order/orderSlice'

// This values are the props in the UI
const style = { layout: 'vertical' }

ReactPayPal.propTypes = {
   currency: PropTypes.string,
   showSpinner: PropTypes.bool
}
ReactPayPal.defaultProps = {
   currency: 'USD',
   showSpinner: true
}

function ReactPayPal({ currency, showSpinner }) {
   const order = useSelector(state => state.order.current)
   const reactDispatch = useDispatch()
   const [{ options, isPending }, dispatch] = usePayPalScriptReducer()

   useEffect(() => {
      dispatch({
         type: 'resetOptions',
         value: {
            ...options,
            currency: currency
         }
      })
   }, [currency, showSpinner])

   return (
      <>
         {showSpinner && isPending && <div className="spinner" />}
         <PayPalButtons
            style={style}
            disabled={false}
            forceReRender={[order.amount, currency, style]}
            fundingSource={undefined}
            createOrder={(data, actions) => {
               return actions.order
                  .create({
                     purchase_units: [
                        {
                           amount: {
                              currency_code: currency,
                              value: order.amount
                           }
                        }
                     ]
                  })
                  .then(orderId => {
                     // Your code here after create the order
                     return orderId
                  })
            }}
            onApprove={function (data, actions) {
               return actions.order.capture().then(function () {
                  // Your code here after capture the order
                  console.log('paid')
                  reactDispatch(payOrder())
               })
            }}
         />
      </>
   )
}

export default ReactPayPal
