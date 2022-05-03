import { SignInDetails, ThirdPartySignup } from '@/types'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth'
import { auth } from '@/firebase'
import type { UserCredential } from 'firebase/auth'
import { THIRD_PARTY_SIGN_TYPE } from '@/constant'

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

const mappingThirdPartySignup = async (type: ThirdPartySignup) => {
  switch (type) {
    case THIRD_PARTY_SIGN_TYPE.GOOGLE: {
      const provider = new GoogleAuthProvider()
      return await signInWithPopup(auth, provider)
    }
    case THIRD_PARTY_SIGN_TYPE.FACEBOOK: {
      const provider = new FacebookAuthProvider()
      return await signInWithPopup(auth, provider)
    }
    case THIRD_PARTY_SIGN_TYPE.GITHUB: {
      const provider = new GithubAuthProvider()
      return await signInWithPopup(auth, provider)
    }
  }
}

export const thirdPartySignup = async (type: ThirdPartySignup) => {
  mappingThirdPartySignup(type)
}
