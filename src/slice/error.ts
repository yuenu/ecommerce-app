import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FirebaseError } from 'firebase/app'

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
    setAPIError: (state, action: PayloadAction<FirebaseError>) => {
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
