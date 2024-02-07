import React, { useState } from 'react';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from './authConfig';
import './Component.css';
//These imports aren't ready to use yet.
// import { Client } from "@microsoft/microsoft-graph-client";
// import ManagerView from "./ManagerView";
// import OperativeView from "./OperativeView";

export default function Component() {
  const { instance } = useMsal();
  // Not yet implemented
  // const [role, setRole] = useState(null);

// Not yet implemented 
//   const getGraphClient = (accessToken) => {
//     return Client.init({
//       authProvider: (done) => {
//         done(null, accessToken); // First parameter takes an error if you want to throw one.
//       },
//     });
//   };

//   const getUserDetails = async () => {
//     try {
//       const response = await instance.acquireTokenSilent({
//         ...loginRequest,
//         account: accounts[0],
//       });

//       const graphClient = getGraphClient(response.accessToken);
//       const userDetails = await graphClient.api('/me').get();

//       // Assuming PCAPPROLE comes as a custom claim within the user's details object.
//       // You might need to check the exact path depending on your setup.
//       setRole(userDetails.PCAPPROLE); 

//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     if (accounts && accounts.length > 0) {
//       getUserDetails();
//     }
//   // Ensure effect only runs once upon component mount
//   }, [accounts]);

//   // Logic to display views based on role
//   let contentView = null;
//   if (role === "Manager") {
//     contentView = <ManagerView />;
//   } else if (role === "Operative") {
//     contentView = <OperativeView />;
//   }

  const handleLogin = (loginType) => {
    if(loginType === "popup") {
      instance.loginPopup(loginRequest).catch(e => {
        console.error(e);
      });
    } else if(loginType === "redirect") {
      instance.loginRedirect(loginRequest).catch(e => {
        console.error(e);
      });
    }
  };

  return (
  <div className="w-full h-screen flex justify-center items-center">
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
      <div className="flex justify-center mb-4">
        <img src="/images/PC_LOGO.PNG" alt="Logo" className="h-12" />
      </div>
      <h2 className="text-2xl font-bold text-center mb-8">Pest Control Booking System</h2>
      <img
        src="/images/ms-symbollockup_signin_light.png"
        alt="Sign in with Microsoft"
        className="mt-8 mb-4 w-full cursor-pointer"
        onClick={() => handleLogin("popup")}
      />
    </div>
  </div>
  );
}
