import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import RatingField from '../form-controls/RatingField'
import React from 'react'
import * as yup from 'yup'
import TextInputField from '../form-controls/TextInputField'
import { yupResolver } from '@hookform/resolvers/yup'
import { OutlinedButton } from '../button/Button'

const schema = yup.object().shape({
   rating: yup.number().min(1, 'You must choose rating').max(5).required(),
   message: yup.string().max(1000)
})
const ReviewForm = ({ onSubmit }) => {
   const form = useForm({
      defaultValues: {
         rating: 0,
         message: ''
      },
      resolver: yupResolver(schema)
   })
   const { reset, control } = form

   const handleSubmit = async data => {
      try {
         const payload = {
            rating: data.rating,
            message: data.message
         }
         await onSubmit(payload)
         reset()
      } catch (error) {
         console.log('🚀 ~ file: ReviewForm.jsx:38 ~ handleSubmit ~ error', error)
      }
   }

   return (
      <Box id="review">
         <Typography fontSize={16} fontWeight={500} sx={{ letterSpacing: 0.9 }}>
            ADD A REVIEW
         </Typography>
         <form onSubmit={form.handleSubmit(handleSubmit)}>
            <RatingField label={'Your Rating'} control={control} name={'rating'} />
            <TextInputField
               label={'Your Review'}
               control={control}
               name={'message'}
               multiline
               rows={4}
            />
            <Box sx={{ mt: 1 }}>
               <OutlinedButton type="submit">
                  <span>Submit</span>
               </OutlinedButton>
            </Box>
         </form>
      </Box>
   )
}

ReviewForm.propTypes = {
   onSubmit: PropTypes.func.isRequired
}

export { ReviewForm }
