import React from 'react';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useMsal } from "@azure/msal-react";
import { msalConfig, loginRequest } from './authConfig'; // Importing config from authConfig.js

// SignIn button component
const SignInButton = () => {
    const { instance } = useMsal();

    const handleLogin = () => {
        instance.loginPopup(loginRequest).catch(e => {
            console.error(e);
        });
    };

    return <button onClick={handleLogin}>Sign In</button>;
};

// SignOut button component
const SignOutButton = () => {
    const { instance } = useMsal();

    const handleLogout = () => {
        instance.logoutPopup().catch(e => {
            console.error(e);
        });
    };

    return <button onClick={handleLogout}>Sign Out</button>;
};

// Main App component
const App = () => {
    const msalInstance = new PublicClientApplication(msalConfig);

    return (
        <MsalProvider instance={msalInstance}>
            <div className="App">
                <h1>Welcome to the Pest Control Booking System</h1>
                <SignInButton />
                <SignOutButton />
                {/* Additional app components go here */}
            </div>
        </MsalProvider>
    );
}

export default App;
