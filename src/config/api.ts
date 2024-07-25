const gatewayEndpoint = import.meta.env.VITE_GATEWAY_ENDPOINT;

export const apiEndpoints = {
  auth: {
    signup: `${gatewayEndpoint}/api/auth/register`,
    login: `${gatewayEndpoint}/api/auth/login`,
    logout: `${gatewayEndpoint}/api/auth/logout`,
    verify: `${gatewayEndpoint}/api/auth/verify`,
    refresh: `${gatewayEndpoint}/api/auth/refresh`,
  }
};