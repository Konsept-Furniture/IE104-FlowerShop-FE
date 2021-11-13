import TextInputField from '@/components/form-controls/TextInputField'
import { path } from '@/constants/path'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '@mui/material/Button'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import * as yup from 'yup'
import './Register.scss'

Register.propTypes = {

}

function Register() {
   const history = useHistory()

   const schema = yup.object().shape({
      username: yup.string().max(256).required(),
      password: yup.string().max(256).min(4).required(),
      confirm_password: yup.string().max(256).min(4).required()
         .oneOf([yup.ref('password'), null], 'Passwords must match')
   })
   const form = useForm({
      defaultValues: {
         username: '',
         password: '',
         confirm_password: ''
      },
      resolver: yupResolver(schema)
   })
   const { formState: { isSubmitting } } = form

   const handleSubmit = async(data) => {
      console.log(data, isSubmitting)
      const payload = {
         username: data.username,
         password: data.password
      }
      try {
         const res = await dispatch(login(payload))
         unwrapResult(res)
         history.push(path.home)
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <div className="login">
         <div className="hello">
            <h2>Bonjour!</h2>
            <p>To connect to your account, enter your email address and your password </p>
         </div>

         <form onSubmit={form.handleSubmit(handleSubmit)}>
            <TextInputField
               form={form}
               name="username"
               label="Username"
               disable={isSubmitting}
               color="black"
            />
            <TextInputField
               form={form}
               name="password"
               label="Password"
               disable={isSubmitting}
               color="black"
               type="password"
               sx={{ mt: 1 }}
            />
            <TextInputField
               form={form}
               name="confirm_password"
               label="Confirm password"
               disable={isSubmitting}
               color="black"
               type="password"
               sx={{ mt: 1 }}
            />

            <p className="sign-up">
               Already have an account?
               <a
                  className="text--success"
                  onClick={() => { history.push(path.login) }}
               > Log in
               </a>
            </p>

            <Button fullWidth variant="contained" type="submit" className="btn--submit">Sign Up</Button>
         </form>
      </div>
   )
}

export default Register
