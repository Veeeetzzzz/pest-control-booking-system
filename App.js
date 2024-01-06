import React, { useState, useEffect } from 'react';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useMsal, useAccount } from "@azure/msal-react";
import { msalConfig, loginRequest } from './authConfig';
import ManagerView from './ManagerView'; // Import ManagerView
import OperativeView from './OperativeView'; // Import OperativeView

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

const MainContent = () => {
    const { accounts } = useMsal();
    const account = useAccount(accounts[0] || {});
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        if (account) {
            // Fetch user role from Azure AD claims or from your backend
            // setUserRole(...); // Set the user role based on the information
        }
    }, [account]);

    if (!account) {
        return <SignInButton />;
    }

    switch (userRole) {
        case 'Manager':
            return <ManagerView />;
        case 'Operative':
            return <OperativeView />;
        default:
            return <div>Loading...</div>;
    }
};

const App = () => {
    const msalInstance = new PublicClientApplication(msalConfig);

    return (
        <MsalProvider instance={msalInstance}>
            <div className="App">
                <h1>Welcome to the Pest Control Booking System</h1>
                <MainContent />
                <SignOutButton />
            </div>
        </MsalProvider>
    );
};

export default App;
