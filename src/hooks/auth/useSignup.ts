import { useState } from "react";
import { apiEndpoints } from "@/config/api";
import { notifications } from "@mantine/notifications";

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (name: string, email: string, password: string, confirm_password: string) => {
    setIsLoading(true);

    const response = await fetch(apiEndpoints.auth.signup, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, confirm_password }),
      credentials: 'include'
    });

    const responsePayload = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      notifications.show({
        "title": responsePayload.message,
        "message": "Please try again!",
        "color": "red",
      })
    } else {
      setIsLoading(false);
      notifications.show({
        "title": "We have sent you a verification email!",
        "message": "You have successfully signed up!",
        "color": "teal",
      })
    }
  };

  return { signup, isLoading };
};
