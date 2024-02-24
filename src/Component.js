import React, { useState } from 'react';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from './authConfig';
//These imports aren't ready to use yet.
// import { Client } from "@microsoft/microsoft-graph-client";
// import ManagerView from "./ManagerView";
// import OperativeView from "./OperativeView";
import SignInButton from './SignInButton'; //

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
    <div>
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
        <img src="/images/PC_LOGO.PNG" class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold">Pest Control Booking System</h1>
          <SignInButton handleLogin={handleLogin} />
          <p class="py-6">No account? Click here to contact the IT Help Desk.</p>
        </div>
      </div>
    </div>
   </div>
    );
}
