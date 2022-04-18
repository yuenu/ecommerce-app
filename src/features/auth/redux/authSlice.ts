import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { clearStoredUser, getStoredUser, setStoredUser } from '../api'
import { SignInStatus, LoggedInUser } from '../types'

export interface AuthState {
  userDetails?: LoggedInUser
  signInStatus: SignInStatus
}

const getInitialState = (): AuthState => {
  const initialState: AuthState = {
    signInStatus: 'idle',
  }
  const storedUser = getStoredUser()
  if (storedUser) initialState.userDetails = storedUser
  return initialState
}

const initialState = getInitialState()

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<LoggedInUser>) => {
      // clear "pending" signInStatus so sign-in page can redirect without triggering cancelSignIn
      state.signInStatus = 'idle'
      state.userDetails = action.payload
      setStoredUser(action.payload)
    },
    signOut: (state) => {
      state.userDetails = undefined
      clearStoredUser()
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
