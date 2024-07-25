import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { apiEndpoints } from "@/config/api";

export const useVerify = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { dispatch } = useAuthContext();

  const verifyUser = async (token: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(apiEndpoints.auth.verify, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include'
      });

      const responsePayload = await response.json();
      console.log(responsePayload);

      if (!response.ok) {
        setError(responsePayload.message);
      } else {
        dispatch({ type: "LOGIN", payload: responsePayload });
      }
    } catch (err: any) {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return { verifyUser, isLoading, error };
};
