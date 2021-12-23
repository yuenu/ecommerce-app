const IMAGE = {
  prod1: require('@/assets/images/product1.png'),
  prod2: require('@/assets/images/product2.png'),
  prod3: require('@/assets/images/product3.png'),
}

export const categories = [
  {
    id: 'Headphone',
    name: 'Headphone',
  },
  {
    id: 'Headband',
    name: 'Headband',
  },
  {
    id: 'Earpads',
    name: 'Earpads',
  },
  {
    id: 'Cable',
    name: 'Cable',
  },
]

export const topProducts = [
  {
    id: '1',
    name: 'TMA-2 Modular Headphone',
    img: IMAGE.prod2,
  },
  {
    id: '2',
    name: 'C02 - Cable',
    img: IMAGE.prod1,
  },
]

export const featuredProducts = [
  {
    id: '1',
    name: 'TMA-2 HD Wireless',
    img: IMAGE.prod2,
    price: 'USD 350',
  },
  {
    id: '2',
    name: 'C02 - Cable',
    img: IMAGE.prod3,
    price: 'USD 25',
  },
  {
    id: '3',
    name: 'C02 - Cable',
    img: IMAGE.prod1,
    price: 'USD 25',
  },
]

export const popularProduct = [
  {
    id: 1,
    name: 'TMA-2 Comfort Wireless',
    price: 'USD 270',
    rate: 4.6,
    reviews: 86,
    image: IMAGE.prod1,
  },
  {
    id: 2,
    name: 'TMA-2 DJ',
    price: 'USD 199',
    rate: 4.4,
    reviews: 112,
    image: IMAGE.prod2,
  },
  {
    id: 3,
    name: 'TMA-2 Move Wireless',
    price: 'USD 135',
    rate: 4.1,
    reviews: 45,
    image: IMAGE.prod3,
  },
]

export const headerTab = [
  {
    id: 1,
    name: 'Popularity',
  },
  {
    id: 2,
    name: 'Newest',
  },
  {
    id: 3,
    name: 'Most Expensive',
  },
]
