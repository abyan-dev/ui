import { apiEndpoints } from "@/config/api";
import { useState } from "react";
import { notifications } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export const useLogout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const { dispatch } = useAuth()

  const logout = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(apiEndpoints.auth.logout, {
        method: 'POST',
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error("Failed to log out");
      }

      setIsLoading(false);
      notifications.show({
        title: "Hope you enjoyed your stay!",
        message: "You have successfully logged out.",
        color: "teal",
      });

      navigate("/dashboard")
      dispatch({ type: "LOGOUT" })
    } catch (err: any) {
      setIsLoading(false);
    }
  };

  return { logout, isLoading };
};
