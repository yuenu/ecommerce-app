import { Nav, Input, Icon } from '@/components'
import { popularProduct } from '@/data/dummy-data'
import { Main } from '@/layouts'

const lastSearch = [
  {
    id: '1',
    text: 'TMA2 Wireless',
  },
  {
    if: '2',
    text: 'Cable',
  },
]

export function Search() {
  return (
    <Main>
      <Nav
        className="px-4 py-4"
        left={<Icon.ArrowLeft className="w-5" />}
        title={'Search'}
        right={<Icon.ShoppingCart />}
      />
      <header className="px-6">
        <Input
          type="search"
          name="search"
          placeholder="Search headphone"
          icon={<Icon.Search />}
          className="w-full py-3 mt-6 border border-gray-dark"
        />
      </header>

      <div className="p-6">
        <h2 className="mb-1 text-base font-light">Lastest search</h2>
        {lastSearch.map((item) => {
          return (
            <div className="flex items-center gap-3 py-2">
              <Icon.Clock className="w-5 text-gray-dark" />
              <p className="text-sm">{item.text}</p>
              <button className="flex items-center justify-center w-8 h-8 ml-auto">
                <Icon.X className="w-5" />
              </button>
            </div>
          )
        })}
      </div>
      <div className="px-6">
        <h2 className="mb-5 text-base font-light">Popular product</h2>
        {popularProduct.map((item) => {
          return (
            <div className="flex gap-4 mb-5">
              <div className="flex items-center justify-center w-20 h-20 bg-gray-100 rounded-xl">
                <img className="w-14" src={item.image} alt="" />
              </div>
              <div className="flex-1">
                <h4>{item.name}</h4>
                <h5 className="font-bold">{item.price}</h5>
                <footer className="flex items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">
                      <Icon.Star className="w-4 h-4" />
                    </span>
                    {item.rate}
                  </div>
                  <p className="ml-4">{item.reviews} Reviews</p>
                  <button className="ml-auto">
                    <Icon.MoreVertical className="w-5 h-5" />
                  </button>
                </footer>
              </div>
            </div>
          )
        })}
      </div>
    </Main>
  )
}
