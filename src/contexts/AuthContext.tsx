import React, { createContext, ReactNode, useReducer, Dispatch } from "react"

interface AuthState {
  user: any | null
}

type AuthAction =
  | { type: 'LOGIN', payload: any }
  | { type: 'LOGOUT' }

interface AuthContextProps extends AuthState {
  dispatch: Dispatch<AuthAction>
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  })

  console.log("AuthContext state:", state)

  return (
    <AuthContext.Provider
      value={{ ...state, dispatch }}
    >
      {children}
    </AuthContext.Provider>
  )
}
