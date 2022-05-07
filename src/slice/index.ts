import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux'
import counterReducer from './counter/counterSlice'
import AuthReducer from './auth'
import ToastReducer from './toast'
import ErrorReducer from './error'
import CartReducer from './cart'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: AuthReducer,
    toast: ToastReducer,
    cart: CartReducer,
    error: ErrorReducer,
  },
  // TODO: fixed the issue:
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector
