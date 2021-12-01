import { OutlinedButton } from '@/components/button/Button'
import { path } from '@/constants/path'
import { yupResolver } from '@hookform/resolvers/yup'
import PropTypes from 'prop-types'
import React from 'react'
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

   const schema = yup.object().shape({
      quantity: yup.number().min(1).nullable()
   })
   const form = useForm({
      defaultValues: {
         quantity: 1
      },
      resolver: yupResolver(schema)
   })
   const {
      register,
      handleSubmit,
      setValue,
      getValues,
      formState: { isSubmitSuccessful },
      reset
   } = form

   const decreaseQuantity = () => {
      const quantity = Number.parseInt(getValues('quantity')) - 1
      if (quantity > 0) {
         setValue('quantity', quantity)
      } else {
         setValue('quantity', 1)
      }
   }

   const increaseQuantity = () => {
      const quantity = Number.parseInt(getValues('quantity')) + 1
      if (quantity <= product.quantity) {
         setValue('quantity', quantity)
      } else {
         setValue('quantity', product.quantity)
      }
   }

   const handleAddToCart = async values => {
      if (onAddToCart) {
         await onAddToCart(values)
         if (isSubmitSuccessful) reset({ quantity: 1 })
      }
   }

   return (
      <div className="product-detail">
         <div className="product-detail__thumbnail">
            <img className="product-detail__image" src={product.img}></img>
         </div>
         <div className="product-detail__info">
            <h1 className="product-detail__title">{product.title}</h1>
            <p className="product-detail__price">${product.price.toFixed(2)}</p>
            <div className="product-detail__description">
               <p>{product.desc}</p>
            </div>

            <form onSubmit={handleSubmit(handleAddToCart)}>
               <div className="product-detail__quantity">
                  <span
                     className="product-detail__quantity--minus"
                     onClick={decreaseQuantity}
                  >
                     ‒
                  </span>
                  <input
                     className="product-detail__quantity--input"
                     {...register('quantity')}
                     placeholder=""
                     inputMode="numeric"
                  />
                  <span
                     className="product-detail__quantity--plus"
                     onClick={increaseQuantity}
                  >
                     +
                  </span>
               </div>
               <OutlinedButton type="submit">
                  <span>Add to cart</span>
               </OutlinedButton>
            </form>

            <div className="product-detail__meta">
               <span className="product-detail__categories">
                  <span className="product-detail__meta-label">Category: </span>
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
