import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useVerify } from '@/hooks/useVerify';
import { Anchor, Button, Center, Stack, Text, Title } from '@mantine/core';
import { siteConfig } from '@/config/site';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function VerifyPage() {
  const { verifyUser, error, isLoading } = useVerify();
  const query = useQuery();
  const token = query.get('token');
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);
  const [verificationAttempted, setVerificationAttempted] = useState(false);

  useEffect(() => {
    if (token && !verificationAttempted) {
      verifyUser(token).then(() => {
        setVerificationAttempted(true);
      });
    } else if (!token) {
      setRedirect(true);
    }
  }, [token, verifyUser, verificationAttempted, error]);

  useEffect(() => {
    if (redirect || (verificationAttempted && error)) {
      navigate('/');
    }
  }, [redirect, verificationAttempted, error, navigate]);

  if (redirect || !token) {
    return null;
  }

  return (
    <Center>
      <Stack align="center">
        <Title>
          {isLoading ? "Verifying..." : "🎉 Welcome aboard! 🎉"}
        </Title>
        <Text mb="sm" className="text-lg w-[60%] text-center text-zinc-400">
          {isLoading ?
            "Please give us a moment to verify your account..." :
            "Your account has successfully been registered! You may now access all available public services on this site!"
          }
        </Text>
        {!error && token && !isLoading && (
          <Anchor href={siteConfig.pages.Dashboard}>
            <Button size="lg" variant="outline" color="teal">
              Explore My Dashboard
            </Button>
          </Anchor>
        )}
      </Stack>
    </Center>
  );
}
