import QuantityField from '@/components/form-controls/QuantityField'
import { path } from '@/constants/path'
import { Checkbox, TableCell, TableRow, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

CartItem.propTypes = {
   data: PropTypes.object.isRequired,
   form: PropTypes.object.isRequired,
   onSelect: PropTypes.func.isRequired,
   onRemove: PropTypes.func.isRequired,
   selected: PropTypes.bool.isRequired
}

function CartItem({ data, form: { form, name }, onSelect, onRemove, selected }) {
   const { control, watch } = form
   const watchQuantity = watch(name)

   const handleRemove = () => {
      if (onRemove) onRemove(data)
   }

   return (
      <TableRow hover>
         <TableCell padding="checkbox">
            <Checkbox checked={selected} onChange={() => onSelect(data)} color="black" />
         </TableCell>
         <TableCell
            align="right"
            width="150px"
            sx={{
               display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'table-cell'
               }
            }}
         >
            <img className="product-image" src={data.img} />
         </TableCell>
         <TableCell align="left">
            <div>
               <Link to={`${path.products}/${data._id}`}>
                  <Typography variant="h6" component="div">
                     {data.title}
                  </Typography>
               </Link>
               <Typography
                  variant="p"
                  sx={{ cursor: 'pointer' }}
                  color="error"
                  onClick={handleRemove}
               >
                  Remove
               </Typography>
            </div>
         </TableCell>
         <TableCell
            align="right"
            sx={{
               display: {
                  xs: 'none',
                  sm: 'table-cell'
               }
            }}
         >
            ${data.price.toFixed(2)}
         </TableCell>
         <TableCell align="right">
            <QuantityField name={name} control={control} />
         </TableCell>

         {/* //FIXME: */}
         <TableCell
            align="right"
            sx={{
               display: {
                  xs: 'none',
                  sm: 'table-cell'
               }
            }}
         >
            ${(watchQuantity * data.price).toFixed(2)}
         </TableCell>
      </TableRow>
   )
}

export default CartItem
