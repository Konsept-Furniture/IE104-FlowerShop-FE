import React from 'react'
import PropTypes from 'prop-types'
import { useController } from 'react-hook-form'
import './style.scss'

QuantityField.propTypes = {
   control: PropTypes.object.isRequired,
   name: PropTypes.string.isRequired,

   min: PropTypes.number,
   max: PropTypes.number
}

QuantityField.defaultProps = {
   min: 1
}

function QuantityField(props) {
   const { control, name, min, max } = props
   const { field } = useController({
      name,
      control
   })

   const { value, onChange } = field

   const decreaseQuantity = () => {
      const quantity = Number.parseInt(value) - 1
      if (quantity >= min) {
         onChange(quantity)
      } else {
         onChange(1)
      }
   }
   const increaseQuantity = () => {
      const quantity = Number.parseInt(value) + 1

      if (max) {
         if (quantity <= max) {
            onChange(quantity)
         } else {
            onChange(max)
         }
      } else {
         onChange(quantity)
      }
   }

   return (
      <div className="quantity">
         <span className="quantity--minus" onClick={decreaseQuantity}>
            ‒
         </span>
         {/* TODO: custom after unfocus, remove alphabet characters */}
         <input
            className="quantity--input"
            {...field}
            placeholder=""
            inputMode="numeric"
         />
         <span className="quantity--plus" onClick={increaseQuantity}>
            +
         </span>
      </div>
   )
}

export default QuantityField
