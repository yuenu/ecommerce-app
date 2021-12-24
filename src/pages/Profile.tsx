import { Avatar, Icon, Nav } from '@/components'
import { Main } from '@/layouts'
import clsx from 'clsx'

const profileInfo = [
  {
    title: 'General',
    items: ['Edit Profile', 'Notifications', 'Wishlist'],
  },
  {
    title: 'Legal',
    items: ['Terms of Use', 'Privacy Policy'],
  },
  {
    title: 'Personal',
    items: ['Report a Bug', 'Logout'],
  },
]

export default function Profile() {
  return (
    <Main>
      <Nav
        className="px-4 py-4"
        left={<Icon.ArrowLeft />}
        title="Profile"
      />
      <header className="flex items-center gap-8 p-6 border-0 border-b border-solid">
        <Avatar className="w-20" />
        <div>
          <p className="mb-1 text-base">Josh Hsu</p>
          <p className="text-gray-400">miraiku82@gmail.com</p>
        </div>
      </header>
      <section className="">
        {profileInfo.map((group) => {
          return (
            <div>
              <p className="px-6 my-5 text-gray-darker">
                {group.title}
              </p>
              {group.items.map((item) => {
                return (
                  <button
                    className={clsx(
                      'border-0 border-b border-solid',
                      'py-3 block w-full text-left px-6'
                    )}>
                    {item}
                  </button>
                )
              })}
            </div>
          )
        })}
      </section>
    </Main>
  )
}
