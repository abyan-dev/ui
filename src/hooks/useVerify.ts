import { useState } from "react";
import { useAuth } from "./useAuth";
import { apiEndpoints } from "@/config/api";

export const useVerify = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { dispatch } = useAuth();

  const verifyUser = async (token: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${apiEndpoints.auth.verify}?token=${token}`, {
        method: 'POST',
        credentials: 'include'
      });

      const responsePayload = await response.json();
      console.log(responsePayload);

      if (!response.ok) {
        setError(responsePayload.message);
      } else {
        dispatch({ type: "LOGIN", payload: responsePayload.data });
      }
    } catch (err: any) {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return { verifyUser, isLoading, error };
};
