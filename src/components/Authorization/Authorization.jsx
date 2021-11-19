import { path } from '@/constants/path'
import { unauthorize } from '@/features/Auth/authSlice'
import { getCart } from '@/features/Cart/cartSlice'
import { useAuthenticated } from '@/hooks/useAuthenticated'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function Authorization() {
   const dispatch = useDispatch()
   const status = useSelector(state => state.app.status)
   const authenticated = useAuthenticated()
   const history = useHistory()

   useEffect(() => {
      console.log('status, auth', status, authenticated)
      if (status === 401) {
         dispatch(unauthorize())
         history.push(path.login)
      }
   }, [dispatch, status, history])

   useEffect(() => {
      console.log('status, auth', status, authenticated)
      if (authenticated) {
         dispatch(getCart())
      }
   }, [dispatch, authenticated])

   return null
}
