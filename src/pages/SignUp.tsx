import { Auth as Layout } from '@/layouts'
import { Icon, Input, Button, SocialMedia } from '@/components'

export function SignUp() {
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

      <Button className="mt-6">Sign Up</Button>

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
        <a
          href="/"
          className="font-normal border-b text-primary border-b-primary">
          Sign In here
        </a>
      </p>
    </Layout>
  )
}
