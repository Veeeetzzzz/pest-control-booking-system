export const msalConfig = {
    auth: {
        clientId: "your_client_id", // This is your client ID
        authority: "https://login.microsoftonline.com/your_tenant_id", // Replace YOUR_TENANT_ID with your Azure AD tenant ID
        redirectUri: "http://localhost:3000" // This should match your redirect URI in Azure AD registration
    }
};

export const loginRequest = {
   scopes: ["openid", "profile", "User.Read"] // Add scopes here
};
