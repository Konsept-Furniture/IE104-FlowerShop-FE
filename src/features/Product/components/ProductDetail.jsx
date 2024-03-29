import { OutlinedButton } from '@/components/button/Button'
import QuantityField from '@/components/form-controls/QuantityField'
import SizeField from '@/components/form-controls/SizeField'
import AddToWishlistButton from '@/components/Wishlist/WishlistButton'
import { path } from '@/constants/path'
import { yupResolver } from '@hookform/resolvers/yup'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import './ProductDetail.scss'

ProductDetail.propTypes = {
   product: PropTypes.object.isRequired,
   onAddToCart: PropTypes.func.isRequired
}

function ProductDetail(props) {
   const { product, onAddToCart } = props
   const history = useHistory()
   const totalQuantity = useMemo(
      () => product.variants.reduce((prev, acc) => prev + acc.qty, 0),
      [product]
   )

   const schema = yup.object().shape({
      quantity: yup.number().min(1).nullable(),
      size: yup.number().min(1).nullable().required('Size is required.')
   })
   const form = useForm({
      defaultValues: {
         quantity: 1,
         size: undefined
      },
      resolver: yupResolver(schema)
   })
   const {
      control,
      handleSubmit,
      formState: { isSubmitSuccessful },
      reset
   } = form

   const handleAddToCart = async values => {
      console.log('🚀 ~ file: ProductDetail.jsx:48 ~ handleAddToCart ~ values', values)
      if (onAddToCart) {
         await onAddToCart(values)
         if (isSubmitSuccessful) reset({ quantity: 1, size: undefined })
      }
   }

   return (
      <div className="product-detail">
         <div className="product-detail__thumbnail">
            <img className="product-detail__image" src={product.photo?.url ?? product.img}></img>
         </div>
         <div className="product-detail__info">
            <h1 className="product-detail__title">{product.title}</h1>
            <p className="product-detail__price">${product.price.toFixed(2)}</p>
            <div className="product-detail__description">
               <dix
                  dangerouslySetInnerHTML={{ __html: product.desc.replaceAll(/\n/g, '<br />') }}
               ></dix>
            </div>

            {totalQuantity > 0 ? (
               <form onSubmit={handleSubmit(handleAddToCart)}>
                  <SizeField
                     label=""
                     control={control}
                     name={'size'}
                     options={product.variants.map(variant => ({
                        label: variant.size,
                        value: variant.size,
                        qty: variant.qty
                     }))}
                  />
                  <Typography variant="body1" sx={{ mt: 2 }}>
                     Quantity
                  </Typography>
                  <Box className="add-to-cart">
                     <QuantityField name="quantity" control={control} max={product.quantity} />
                     <OutlinedButton type="submit">
                        <span>Add to cart</span>
                     </OutlinedButton>
                  </Box>
               </form>
            ) : (
               <Box sx={{ mt: 2 }}>
                  <Typography variant="h6">This product is out of stock.</Typography>
               </Box>
            )}

            <Box sx={{ mt: 2 }}>
               <AddToWishlistButton productId={product._id} />
            </Box>

            <div className="product-detail__meta">
               <span className="product-detail__categories">
                  <span className="product-detail__meta-label">Categories: </span>
                  <span className="product-detail__meta-value">
                     {product.categories.map((cate, idx) => (
                        <span key={cate}>
                           {idx !== 0 ? ', ' : ''}
                           <a
                              onClick={() => {
                                 history.push({
                                    pathname: path.products,
                                    search: `?category=${cate}`
                                 })
                              }}
                           >
                              {cate}
                           </a>
                        </span>
                     ))}
                  </span>
               </span>
            </div>
         </div>
      </div>
   )
}

export default ProductDetail
