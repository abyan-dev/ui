import { apiEndpoints } from "@/config/api"
import { createContext, ReactNode, useReducer, Dispatch, useEffect } from "react"

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
      localStorage.setItem('user', JSON.stringify(action.payload));
      return { user: action.payload }
    case 'LOGOUT':
      localStorage.removeItem('user');
      return { user: null }
    default:
      return state
  }
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: JSON.parse(localStorage.getItem('user') || 'null'),
  })

  useEffect(() => {
    fetch(apiEndpoints.auth.decode, { method: 'GET', credentials: 'include' })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Unauthorized');
      })
      .then(user => {
        dispatch({ type: 'LOGIN', payload: user.data });
      })
      .catch(() => {
        dispatch({ type: 'LOGOUT' });
      });
  }, [])

  console.log("AuthContext state:", state)

  return (
    <AuthContext.Provider
      value={{ ...state, dispatch }}
    >
      {children}
    </AuthContext.Provider>
  )
}
