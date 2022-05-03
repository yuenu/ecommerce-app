import { showToast, hideToast } from '@/slice/toast'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AuthError } from 'firebase/auth'
import { AppThunk } from '@/slice'

const initialState = {
  visible: false,
  code: '',
  status: '',
  type: '',
  message: '',
}

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      return { ...state, message: action.payload }
    },
    setAPIError: (state, action: PayloadAction<AuthError>) => {
      return { ...state, message: action.payload.code }
    },
    clearError: (_state, _action) => {
      return initialState
    },
  },
})

export const { setError, setAPIError, clearError } =
  errorSlice.actions
export default errorSlice.reducer

export const showError =
  (
    payload: AuthError | string = 'Unexpect Error',
    delay = 2000
  ): AppThunk =>
  (dispatch, getState) => {
    if (typeof payload === 'object') dispatch(setAPIError(payload))
    if (typeof payload === 'string') dispatch(setError(payload))

    const message = getState().error.message
    dispatch(showToast({ message: message, type: 'error' }))
    setTimeout(() => {
      dispatch(hideToast())
    }, delay)
  }
