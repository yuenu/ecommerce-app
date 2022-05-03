export type AuthenticateAction = 'signIn' | 'signUp'

export type SignInStatus = 'idle' | 'pending'

export interface SignInDetails {
  email: string
  password: string
  action: AuthenticateAction
}

export type ThirdPartySignup = 'google' | 'facebook' | 'github'
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

export interface ToastOptions {
  message: string
  type: 'error' | 'info' | 'warning' | 'success' | undefined
}
