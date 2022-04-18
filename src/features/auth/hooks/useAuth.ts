import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInDetails } from '../types'
import { authServerCall } from '../api'
import { UserCredential } from 'firebase/auth'

const useAuth = ({
  email,
  password,
  action = 'signIn',
}: SignInDetails) => {
  const [user, setUser] = useState<UserCredential['user']>()
  const [isLoading, setIsLoading] = useState(false)
  let navigate = useNavigate()

  useEffect(() => {
    setIsLoading(true)
    authServerCall({ email, password, action })
      .then((res) => {
        setUser(res.user)
        navigate('/')
        setIsLoading(false)
      })
      .catch((e) => {
        console.log(e)
        setIsLoading(false)
      })
  }, [email, password, action, navigate])

  return {
    isLoading,
    user,
  }
}

export default useAuth
