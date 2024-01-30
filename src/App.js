import React from 'react';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useMsal, useAccount } from "@azure/msal-react";
import { msalConfig, loginRequest } from './authConfig';
import ManagerView from './ManagerView';
import OperativeView from './OperativeView';
import './App.css';
import './Login.css';
import { Button } from "@/components/ui/button"

//To do: AD Azure SSO Logic

export default function Component() {
  return (
    <div className="w-full h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex items-center justify-center h-full">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <div className="flex items-center justify-center">
            <img
              alt="Microsoft Logo"
              className="h-12 w-auto"
              height="60"
              src="/placeholder.svg"
              style={{
                aspectRatio: "120/60",
                objectFit: "cover",
              }}
              width="120"
            />
          </div>
          <h2 className="text-2xl font-bold text-center mt-4 mb-8">Pest Control Booking System</h2>
          <div className="space-y-4">
            <p className="text-center text-gray-600 dark:text-gray-400">Please sign in with your Microsoft Account</p>
            <Button className="w-full bg-blue-500 text-white flex items-center justify-center">
              <img
                alt="Microsoft Logo"
                className="mr-2"
                height="20"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "20/20",
                  objectFit: "cover",
                }}
                width="20"
              />
              Sign in with Microsoft
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
