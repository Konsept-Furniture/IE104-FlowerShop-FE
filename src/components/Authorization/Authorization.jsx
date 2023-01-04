import { getMe, unauthorize } from '@/features/Auth/authSlice'
import { getCart } from '@/features/Cart/cartSlice'
import { useAuth } from '@/hooks/useAuth'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function Authorization() {
   const dispatch = useDispatch()
   const status = useSelector(state => state.app.status)
   const history = useHistory()
   const { hasLoggedIn } = useAuth()

   useEffect(() => {
      // console.log('status', status)
      if (status === 401) {
         dispatch(unauthorize())
      }
   }, [dispatch, status, history])

   useEffect(() => {
      // console.log('hasLoggedIn', hasLoggedIn)
      if (hasLoggedIn) {
         dispatch(getCart())
         dispatch(getMe())
      } else {
         dispatch(unauthorize())
      }
   }, [hasLoggedIn])

   return null
}
