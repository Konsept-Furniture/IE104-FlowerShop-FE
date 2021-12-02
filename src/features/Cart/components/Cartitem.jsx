import QuantityField from '@/components/form-controls/QuantityField'
import { path } from '@/constants/path'
import ClearIcon from '@mui/icons-material/Clear'
import {
   Checkbox,
   IconButton,
   TableCell,
   TableRow,
   Tooltip,
   Typography
} from '@mui/material'
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

function CartItem({
   data,
   form: { form, name },
   onSelect,
   onRemove,
   selected
}) {
   const { control, watch } = form
   const watchQuantity = watch(name)

   const handleRemove = () => {
      if (onRemove) onRemove(data)
   }

   return (
      <TableRow hover>
         <TableCell padding="checkbox">
            <Checkbox
               checked={selected}
               onChange={() => onSelect(data)}
               color="black"
            />
         </TableCell>
         <TableCell align="right" sx={{ display: 'flex' }}>
            <img className="product-image" src={data.img} />
         </TableCell>
         <TableCell align="left">
            <div>
               <Typography variant="h6" component="div">
                  {data.title}
               </Typography>
               <Link to={`${path.products}/${data._id}`}>View detail</Link>
            </div>
         </TableCell>
         <TableCell align="right">{data.price.toFixed(2)}$</TableCell>
         <TableCell align="right">
            <QuantityField name={name} control={control} />
         </TableCell>

         {/* //FIXME: */}
         <TableCell align="right">
            {(watchQuantity * data.price).toFixed(2)}$
         </TableCell>
         <TableCell align="right">
            <div className="product__remove-btn">
               <Tooltip title="Remove item" placement="top">
                  <IconButton onClick={handleRemove}>
                     <ClearIcon color="error" />
                  </IconButton>
               </Tooltip>
            </div>
         </TableCell>
      </TableRow>
   )
}

export default CartItem
