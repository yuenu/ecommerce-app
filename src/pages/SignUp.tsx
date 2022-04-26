import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Auth as Layout } from '@/layouts'
import { Icon, Input, Button, SocialMedia } from '@/components'
import useAuth from '@/features/auth/hooks/useAuth'

export function SignUp() {
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  // const [isLoading, setIsLoading] = useState(false)
  const { isLoading, onSubmitUserInfo } = useAuth({
    email: registerEmail,
    password: registerPassword,
    action: 'signUp',
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

        <SocialMedia>
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
