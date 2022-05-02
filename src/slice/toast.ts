import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  message: string
  type: 'error' | 'info' | 'warning' | 'success' | undefined
  visible?: boolean
}

const initialState: IState = {
  message: 'Unexpect Error',
  type: 'error',
  visible: false,
}

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast(state, action: PayloadAction<IState>) {
      return { ...state, ...action.payload, visible: true }
    },
    hideToast(state) {
      return { ...state, visible: false }
    },
    resetToast(_state, _action) {
      return initialState
    },
  },
})

export const { showToast, hideToast, resetToast } = toastSlice.actions
export default toastSlice.reducer
