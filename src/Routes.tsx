import { Route, Routes, Navigate, Outlet } from 'react-router-dom'
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
import { useAppSelector } from '@/slice'

type RoutesType = { isAuth: boolean }

const SignInRoutes = ({ isAuth }: RoutesType) => {
  return isAuth ? <Navigate to="/" /> : <Outlet />
}

const ProtectedRoutes = ({ isAuth }: RoutesType) => {
  return isAuth ? <Outlet /> : <Navigate to="/signin" />
}

export const RootRoutes = () => {
  const isAuthenticated = useAppSelector(
    (state) => state.auth.isAuthenticated
  )
  console.log('isAuthenticated', isAuthenticated)
  return (
    <Routes>
      <Route element={<SignInRoutes isAuth={isAuthenticated} />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      <Route element={<ProtectedRoutes isAuth={isAuthenticated} />}>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: '1rem' }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  )
}
