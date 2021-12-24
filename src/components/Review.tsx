import { Icon, Avatar } from '@/components'
import { ReactNode } from 'react'

type ReviewProps = {
  name: string
  rate: number
  createAt: string
  content: string
  images: string[]
}
export function Review({
  name,
  rate,
  createAt,
  content,
  images,
}: ReviewProps) {
  let stars: ReactNode[] = []
  for (let i = 1; i <= 5; i++) {
    const star =
      i <= rate ? (
        <Icon.Star className="w-3 h-3 text-yellow-400" />
      ) : (
        <Icon.Star className="w-3 h-3 text-gray-300" />
      )
    stars.push(star)
  }
  return (
    <div>
      <header className="flex mb-3">
        <Avatar className="object-cover w-8 h-8 mr-3" />
        <div className="w-full ">
          <div className="flex items-center justify-between mb-1">
            <p>{name}</p>
            <p className="text-xs text-gray-400">{createAt}</p>
          </div>
          <div className="flex gap-1 item-center">
            {stars.map((star) => star)}
          </div>
        </div>
      </header>
      <div className="pl-11">
        <p>{content}</p>
        <div className="flex items-center gap-3 mt-3">
          {images &&
            images.map((img) => {
              return (
                <div className="p-1 border rounded-lg">
                  <img className="w-12 h-12" src={img} alt="" />
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}
