export const msalConfig = {
  auth: {
    clientId: "e089d7bc-ed2c-4100-b1ca-475f764262a4", // Your client ID
    authority: "https://login.microsoftonline.com/d7e1ee4c-3a16-49a5-b078-a456b6169744", // Your authority
    redirectUri: "https://pest-control-booking-system.vercel.app/", // This should match your redirect URI in Azure AD registration
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
  scopes: ["User.Read"]
};
