export type AuthenticateAction = 'signIn' | 'signUp'

export type SignInStatus = 'idle' | 'pending'

export type LoggedInUser = {
  userToken?: string
} & User

export interface SignInDetails {
  email: string
  password: string
  action: AuthenticateAction
}

export interface ProviderUserInfo {
  providerId: string
  federatedId: string
  email: string
  rawId: string
}

export interface User {
  localId: string
  email: string
  passwordHash: string
  emailVerified: boolean
  passwordUpdatedAt: number
  providerUserInfo: ProviderUserInfo[]
  validSince: string
  lastLoginAt: string
  createdAt: string
  lastRefreshAt: Date
}

export interface AuthResponse {
  kind: string
  users: User[]
}