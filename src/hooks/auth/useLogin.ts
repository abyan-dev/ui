import { apiEndpoints } from "@/config/api"
import { notifications } from "@mantine/notifications"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./useAuth"

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { dispatch } = useAuth();

  const login = async (email: string, password: string) => {
    setIsLoading(true)

    const response = await fetch(apiEndpoints.auth.login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include'
    })

    const responsePayload = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      notifications.show({
        "title": responsePayload.message,
        "message": "Please try again!",
        "color": "red",
      })
    } else {
      setIsLoading(false)
      notifications.show({
        "title": "Welcome back!",
        "message": "You have successfully logged in!",
        "color": "teal",
      })

      navigate("/")
      dispatch({ type: "LOGIN", payload: responsePayload.data })
    }
  }

  return { login, isLoading }
}