import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import './ProductDetail.scss'
import { OutlinedButton } from '@/components/button/Button'
import { path } from '@/constants/path'

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
   const { register, handleSubmit, setValue, getValues } = form

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
      if (quantity <= product.countInStock) {
         setValue('quantity', quantity)
      } else {
         setValue('quantity', product.countInStock)
      }
   }

   return (
      <div className="product-detail">
         <div className="product__thumbnail">
            <img className="product__image" src={product.img}></img>
         </div>
         <div className="product__info">
            <h1 className="product__title">{product.title}</h1>
            <p className="product__price">${product.price.toFixed(2)}</p>
            <div className="product__description">
               <p>{product.desc}</p>
            </div>

            <form onSubmit={handleSubmit(onAddToCart)}>
               <div className="product__quantity">
                  <span
                     className="product__quantity--minus"
                     onClick={decreaseQuantity}
                  >‒</span>
                  <input
                     className="product__quantity--input"
                     {...register('quantity')}
                     placeholder=""
                     inputMode="numeric"
                  />
                  <span
                     className="product__quantity--plus"
                     onClick={increaseQuantity}
                  >+</span>
               </div>
               <OutlinedButton
                  type="submit"
               >
                  <span>Add to cart</span>
               </OutlinedButton>
            </form>

            <div className="product__meta">
               <span className="product__categories">
                  <span className="product__meta-label">Category: </span>
                  <span className="product__meta-value">
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
