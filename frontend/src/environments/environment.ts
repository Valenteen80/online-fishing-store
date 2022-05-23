import { LocalStorageKey } from "src/app/enums/local-storage-key-enum";

export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api',
};

export const environmentCredentials = {
  production: false,
  jwt: {
    config: {
      tokenGetter: () => {
        return localStorage.getItem(LocalStorageKey.AUTH_TOKEN);
      }, 
      allowedDomains: ["example.com"],
      disallowedRoutes: ["http://example.com/examplebadroute/"],
    },
  },
};
