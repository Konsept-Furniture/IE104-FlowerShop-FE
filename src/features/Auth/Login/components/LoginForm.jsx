import React from 'react'
import PropTypes from 'prop-types'
import LoadingButton from '@mui/lab/LoadingButton'
import TextInputField from '@/components/form-controls/TextInputField'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { path } from '@/constants/path'
import { useHistory } from 'react-router'

LoginForm.propTypes = {
   defaultValues: PropTypes.object.isRequired,
   onSubmit: PropTypes.func.isRequired
}

const schema = yup.object().shape({
   username: yup.string().max(32).required(),
   password: yup.string().max(32).min(4).required()
})
function LoginForm({ defaultValues, onSubmit }) {
   const history = useHistory()
   const form = useForm({
      defaultValues,
      resolver: yupResolver(schema)
   })
   const {
      formState: { isSubmitting },
      control
   } = form

   const handleSubmit = async values => {
      if (onSubmit) await onSubmit(values)
   }
   return (
      <form onSubmit={form.handleSubmit(handleSubmit)}>
         <TextInputField
            control={control}
            name="username"
            label="Username"
            disable={isSubmitting}
            color="black"
            data-testid="username"
         />
         <TextInputField
            control={control}
            name="password"
            label="Password"
            disable={isSubmitting}
            color="black"
            type="password"
            sx={{ mt: 1 }}
            data-testid="password"
         />

         <p className="sign-up">
            Don&lsquo;t have an account?
            <a
               className="text--success"
               onClick={() => {
                  history.push(path.register)
               }}
            >
               {' '}
               Sign up
            </a>
         </p>

         <LoadingButton
            fullWidth
            variant="contained"
            type="submit"
            className="btn--submit"
            loading={isSubmitting}
            color="black"
            onClick={form.handleSubmit(handleSubmit)}
         >
            Log In
         </LoadingButton>
      </form>
   )
}

export default LoginForm
