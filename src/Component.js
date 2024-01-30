import React from 'react';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from './authConfig';

export default function Component() {
  const { instance } = useMsal();

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
  }
  
  return (
    <div className="w-full h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex items-center justify-center h-full">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <div className="flex items-center justify-center">
            <img
              src="/placeholder.svg"
              alt="Microsoft Logo"
              width="120"
              height="60"
              className="h-12 w-auto"
              style={{ aspectRatio: "120 / 60", objectFit: "cover" }}
            />
          </div>
          <h2 className="text-2xl font-bold text-center mt-4 mb-8">Pest Control Booking System</h2>
          <div className="space-y-4">
            <p className="text-center text-gray-600 dark:text-gray-400">Please sign in with your Microsoft Account</p>
            <button
              onClick={() => handleLogin("popup")}
              className="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-blue-500 text-white flex items-center justify-center"
            >
              Sign in with Microsoft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
