import { Route, Routes } from 'react-router-dom'
import Profile from '@/pages/Profile'
import {
  Explore,
  Home,
  ProductDetail,
  Search,
  ShoppingCart,
  SignIn,
  SignUp,
} from '@/pages'

export const IRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/product-detail" element={<ProductDetail />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="search/" element={<Search />} />
      <Route path="/shopping-cart" element={<ShoppingCart />} />
    </Routes>
  )
}
