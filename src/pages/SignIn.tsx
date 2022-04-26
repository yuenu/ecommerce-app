import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Input, Button } from '@/components'
import { Auth as Layout } from '@/layouts'
import useAuth from '@/features/auth/hooks/useAuth'

export function SignIn() {
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const { isLoading, onSubmitUserInfo } = useAuth({
    email: registerEmail,
    password: registerPassword,
    action: 'signIn',
  })

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log('submit', registerEmail, registerPassword)
    onSubmitUserInfo()
  }
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

      <div className="py-6">
        <a href="/">Forget Password</a>
      </div>

      <Button
        className="mt-6"
        type="submit"
        onClick={onSubmit}
        disabled={isLoading}>
        Sign In
      </Button>

      <p className="mt-6 space-x-1">
        <span className="font-light">Didn't have any account?</span>
        <Link
          to="/signup"
          className="font-normal border-b text-primary border-b-primary">
          Sign Up here
        </Link>
      </p>
    </Layout>
  )
}
