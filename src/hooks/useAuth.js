import { useState, useEffect } from 'react'
import authApi from '@/features/Auth/authApi'

export function useAuth() {
   const [hasLoggedIn, setHasLoggedIn] = useState(true)
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
      ;(async () => {
         try {
            await authApi.checkAccessToken()
         } catch (error) {
            setHasLoggedIn(false)
         }
         setIsLoading(false)
      })()
   }, [])

   return {
      hasLoggedIn,
      isLoading
   }
}
