import React, { useState, useEffect } from 'react';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useMsal, useAccount } from "@azure/msal-react";
import { msalConfig, loginRequest } from './authConfig';
import ManagerView from './ManagerView';
import OperativeView from './OperativeView';


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
const Navbar = ({ userRole }) => {
    const managerOptions = ["Book New Job", "View Calendar", "Daily View", "Schedule Search", "Logins", "Officers", "Manage Officers", "Matrix"];
    const operativeOptions = ["Book New Job", "View Calendar", "Daily View", "Unassigned", "Officers"];

    const options = userRole === 'Manager' ? managerOptions : operativeOptions;

    return (
        <nav>
            {options.map(option => <button key={option}>{option}</button>)}
        </nav>
    );
};

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

    return (
        <>
            <Navbar userRole={userRole} />
            {userRole === 'Manager' ? <ManagerView /> : <OperativeView />}
        </>
    );
};

const App = () => {
    const msalInstance = new PublicClientApplication(msalConfig);

    return (
        <MsalProvider instance={msalInstance}>
            <div className="App">
                <header>
                    <img src={logo} alt="Logo" />
                </header>
                <MainContent />
                <SignOutButton />
            </div>
        </MsalProvider>
    );
};

export default App;
