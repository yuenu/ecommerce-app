import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInDetails } from '@/types'
import { authServerCall } from '@/api'
import type { UserCredential } from 'firebase/auth'
import { startSignIn, signIn, endSignIn } from '@/slice/auth'
import { setAPIError } from '@/slice/error'
import { useAppDispatch } from '@/slice'
import { FirebaseError } from 'firebase/app'

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
    dispatch(startSignIn())
    setIsLoading(true)
    await authServerCall({ email, password, action })
      .then((res: UserCredential) => {
        console.log('success login:', res)
        dispatch(signIn(res.user))
        dispatch(endSignIn())
        navigate('/')
        setIsLoading(false)
      })
      .catch((error: FirebaseError) => {
        dispatch(setAPIError(error))
        dispatch(endSignIn())
        setIsLoading(false)
      })
  }, [dispatch, email, password, action, navigate])

  useEffect(() => {
    if (fetcher) authAction()
    return () => setFetcher(false)
  }, [fetcher, authAction])

  const onSubmitUserInfo = () => {
    setFetcher(true)
  }

  return {
    isLoading,
    onSubmitUserInfo,
  }
}

export default useAuth
