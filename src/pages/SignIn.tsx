import { Icon, Input, Button } from '@/components'
import { Auth as Layout } from '@/layouts'

export default function SignIn() {
  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          icon={<Icon.Mail />}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          icon={<Icon.Lock />}
        />
      </div>

      <div className="py-6">
        <a href="/">Forget Password</a>
      </div>

      <Button>Sign In</Button>

      <p className="mt-6 space-x-1">
        <span className="font-light">Didn't have any account?</span>
        <a
          href="/"
          className="font-normal border-b text-primary border-b-primary">
          Sign Up here
        </a>
      </p>
    </Layout>
  )
}
