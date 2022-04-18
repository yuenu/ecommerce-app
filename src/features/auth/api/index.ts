import { LOCALSTORAGE_USER_KEY } from '@/constant'
import { clearItem, getItem, storeItem } from '@/utils/storage'
import { LoggedInUser, SignInDetails } from '../types'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '@/firebase'
import { UserCredential } from 'firebase/auth'

export const authServerCall = async ({
  email,
  password,
  action,
}: SignInDetails): Promise<UserCredential> => {
  switch (action) {
    case 'signIn': {
      return signInWithEmailAndPassword(auth, email, password)
    }
    case 'signUp': {
      return createUserWithEmailAndPassword(auth, email, password)
    }
  }
}

export const setStoredUser = (user: LoggedInUser): void => {
  storeItem(LOCALSTORAGE_USER_KEY, JSON.stringify(user))
}

export const clearStoredUser = (): void => {
  clearItem(LOCALSTORAGE_USER_KEY)
}

export const getStoredUser = (): LoggedInUser | null => {
  const storedUser = getItem(LOCALSTORAGE_USER_KEY)
  return storedUser ? JSON.parse(storedUser) : null
}
