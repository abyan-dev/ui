import { apiEndpoints } from "@/config/api"
import { notifications } from "@mantine/notifications"
import { useState } from "react"

export const useGetTasks = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getTasks = async () => {
    setIsLoading(true)

    const response = await fetch(apiEndpoints.productivity.tasks, {
      credentials: "include"
    })

    const responsePayload = await response.json()

    if (!response.ok) {
      setError(responsePayload.message)
      setIsLoading(false)
      notifications.show({
        "title": responsePayload.message,
        "message": "Please try again!",
        "color": "red",
      })
    } else {
      setError(null)
      setIsLoading(false)
      return responsePayload.data
    }
  }

  return { getTasks, isLoading, error }
}