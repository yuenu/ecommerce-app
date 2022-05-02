import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FirebaseError } from 'firebase/app'

type IState = FirebaseError & {
  visiable?: boolean
}

const initialState: IState = {
  code: '',
  name: '',
  message: '',
  visiable: false,
}

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      return { ...state, message: action.payload }
    },
    setAPIError: (state, action: PayloadAction<FirebaseError>) => {
      return { ...state, ...action.payload }
    },
    clearError: (_state, _action) => {
      return initialState
    },
  },
})

export const { setError, setAPIError, clearError } =
  errorSlice.actions
export default errorSlice.reducer
