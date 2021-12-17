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
