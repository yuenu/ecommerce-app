import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SignInStatus } from '@/types'
import { LOCALSTORAGE_USER_KEY } from '@/constant'
import { clearItem, getItem, storeItem } from '@/utils/storage'
import { signOut as firebaseSignOut, User } from 'firebase/auth'
import { auth } from '@/firebase'

export const setStoredUser = (user: User) => {
  storeItem(LOCALSTORAGE_USER_KEY, JSON.stringify(user))
}

export const clearStoredUser = () => {
  clearItem(LOCALSTORAGE_USER_KEY)
}

export const getStoredUser = (): User | null => {
  const storedUser = getItem(LOCALSTORAGE_USER_KEY)
  return storedUser ? JSON.parse(storedUser) : null
}

export interface AuthState {
  signInStatus: SignInStatus
  user: User | null
  isAuthenticated: boolean
}

const getInitialState = (): AuthState => {
  const initialState: AuthState = {
    signInStatus: 'idle',
    user: null,
    isAuthenticated: false,
  }
  const storedUser = getStoredUser()
  if (storedUser) {
    initialState.user = storedUser
    initialState.isAuthenticated = true
  }
  return initialState
}

const initialState = getInitialState()

const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<User>) => {
      // clear "pending" signInStatus so sign-in page can redirect without triggering cancelSignIn
      state.signInStatus = 'idle'
      state.user = action.payload
      setStoredUser(action.payload)
      storeItem('isAuthenticated', 'true')
      state.isAuthenticated = true
    },
    signOut: (state) => {
      state.user = null
      clearStoredUser()
      firebaseSignOut(auth)
      state.isAuthenticated = false
    },
    startSignIn: (state) => {
      state.signInStatus = 'pending'
    },
    endSignIn: (state) => {
      state.signInStatus = 'idle'
    },
  },
})

export const { signIn, signOut, startSignIn, endSignIn } =
  authSlice.actions

export default authSlice.reducer
