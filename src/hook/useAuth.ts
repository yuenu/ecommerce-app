import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInDetails } from '@/types'
import { authServerCall } from '@/api'
import type { UserCredential, AuthError } from 'firebase/auth'
import { useAppDispatch } from '@/slice'
import { setAPIError } from '@/slice/error'
import { startSignIn, signIn, endSignIn } from '@/slice/auth'
import { showToast, hideToast } from '@/slice/toast'

// TODO: change the firebase/auth to OAuth
const useAuth = ({
  email,
  password,
  action = 'signIn',
}: SignInDetails) => {
  const dispatch = useAppDispatch()
  let navigate = useNavigate()
  const [fetcher, setFetcher] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const authAction = useCallback(async () => {
    setIsLoading(true)
    dispatch(startSignIn())
    await authServerCall({ email, password, action })
      .then((res: UserCredential) => {
        console.log('Success LOGIN:', res)
        dispatch(signIn(res.user))
        dispatch(endSignIn())
        navigate('/')
      })
      .catch((error: AuthError) => {
        dispatch(setAPIError(error))
        dispatch(showToast({ message: error.code, type: 'error' }))
        setTimeout(() => {
          dispatch(hideToast())
        }, 2000)
        dispatch(endSignIn())
      })
    setIsLoading(false)
  }, [dispatch, email, password, action, navigate])

  useEffect(() => {
    if (fetcher) authAction()
    return () => setFetcher(false)
  }, [fetcher, authAction])

  const onSubmit = () => {
    setFetcher(true)
  }

  return {
    isLoading,
    onSubmit,
  }
}

export default useAuth
