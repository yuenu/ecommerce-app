import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInDetails } from '../types'
import { authServerCall } from '../api'
import { UserCredential } from 'firebase/auth'

// TODO: change the firebase/auth to OAuth
const useAuth = ({
  email,
  password,
  action = 'signIn',
}: SignInDetails) => {
  let navigate = useNavigate()
  const [fetcher, setFetcher] = useState(false)
  const [user, setUser] = useState<UserCredential['user']>()
  const [isLoading, setIsLoading] = useState(false)

  const authAction = useCallback(async () => {
    setIsLoading(true)
    await authServerCall({ email, password, action })
      .then((res) => {
        console.log('res:', res)
        setUser(res.user)
        navigate('/')
        setIsLoading(false)
      })
      .catch((e) => {
        console.log(e)
        setIsLoading(false)
      })
  }, [email, password, action, navigate])

  useEffect(() => {
    if (fetcher) authAction()
    return () => setFetcher(false)
  }, [fetcher, authAction])

  const onSubmitUserInfo = () => {
    setFetcher(true)
  }

  return {
    user,
    isLoading,
    onSubmitUserInfo,
  }
}

export default useAuth
