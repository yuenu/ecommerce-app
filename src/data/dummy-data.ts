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
    img: IMAGE.prod1,
  },
  {
    id: '2',
    name: 'C02 - Cable',
    img: IMAGE.prod3,
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
  {
    id: 4,
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

export const lastSearch = [
  {
    id: '1',
    text: 'TMA2 Wireless',
  },
  {
    if: '2',
    text: 'Cable',
  },
]

export const shoppingCart = [
  {
    id: 1,
    image: IMAGE.prod1,
    amount: 1,
    price: 270,
    name: 'TMA-2 Comfort Wireless',
  },
  {
    id: 2,
    image: IMAGE.prod3,
    amount: 1,
    price: 25,
    name: 'C02 - Cable',
  },
]

export const reviewHeaderTab = [
  {
    id: 'overview',
    name: 'Overview',
  },
  {
    id: 'features',
    name: 'Features',
  },
  {
    id: 'specification',
    name: 'Specification',
  },
]

export const reivews = [
  {
    id: 1,
    name: 'Madelina',
    rate: 4,
    createAt: '11 Days ago',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    images: [],
  },
  {
    id: 2,
    name: 'Irfan',
    rate: 5,
    createAt: '1 Month ago',
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    images: [IMAGE.prod1, IMAGE.prod2, IMAGE.prod3],
  },
  {
    id: 3,
    name: 'MadeRavi Putralina',
    rate: 3,
    createAt: '2 Month ago',
    content: 'Excepteur sint occaecat cupidatat non proident',
    images: [],
  },
]
