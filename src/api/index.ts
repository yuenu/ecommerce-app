import { SignInDetails } from '@/types'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '@/firebase'
import type { UserCredential } from 'firebase/auth'

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
