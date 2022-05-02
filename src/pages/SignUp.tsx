import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Auth as Layout } from '@/layouts'
import { Icon, Input, Button, SocialMedia } from '@/components'
import useAuth from '@/hook/useAuth'
import {
  signInWithRedirect,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '@/firebase'
import { useAppDispatch } from '@/slice'
import { endSignIn, signIn } from '@/slice/auth'

export function SignUp() {
  const dispatch = useAppDispatch()
  let navigate = useNavigate()
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const { isLoading, onSubmit: onSubmitUserInfo } = useAuth({
    email: registerEmail,
    password: registerPassword,
    action: 'signUp',
  })

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log('submit', registerEmail, registerPassword)
    onSubmitUserInfo()
  }

  // Third party signin
  // TODO: connect with facebook & apple (or github) sign in
  const onSignInWithGoogle = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault()
    const googleProvider = new GoogleAuthProvider()
    signInWithRedirect(auth, googleProvider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && !user.isAnonymous) {
        dispatch(signIn(user))
        dispatch(endSignIn())
        navigate('/')
      }
    })

    return unsubscribe
  }, [dispatch, navigate])

  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          icon={<Icon.Mail />}
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          icon={<Icon.Lock />}
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
      </div>

      <Button
        className="mt-6"
        type="submit"
        onClick={onSubmit}
        disabled={isLoading}>
        Sign Up
      </Button>

      <div className="flex justify-center gap-4 my-8">
        <SocialMedia>
          <Icon.Apple />
        </SocialMedia>

        <SocialMedia>
          <Icon.Facebook />
        </SocialMedia>

        <SocialMedia onClick={onSignInWithGoogle}>
          <Icon.Google />
        </SocialMedia>
      </div>

      <p className="space-x-1">
        <span className="font-light">Didn't have any account?</span>
        <Link
          to="/signin"
          className="font-normal border-b text-primary border-b-primary">
          Sign In here
        </Link>
      </p>
    </Layout>
  )
}
