const authEndpoint = "http://localhost:8080"
const productivityEndpoint = "http://localhost:8081"

export const apiEndpoints = {
  auth: {
    signup: `${authEndpoint}/api/auth/register`,
    login: `${authEndpoint}/api/auth/login`,
    logout: `${authEndpoint}/api/auth/logout`,
    verify: `${authEndpoint}/api/auth/verify`,
    refresh: `${authEndpoint}/api/auth/refresh`,
    decode: `${authEndpoint}/api/auth/decode`,
  },
  productivity: {
    tasks: `${productivityEndpoint}/api/productivity/tasks`,
  }
};