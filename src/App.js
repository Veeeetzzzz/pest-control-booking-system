import React from 'react';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useMsal, useAccount } from "@azure/msal-react";
import { msalConfig, loginRequest } from './authConfig';
import ManagerView from './ManagerView';
import OperativeView from './OperativeView';
import './App.css';
import './Login.css';

//To do: AD Azure SSO Logic

export default function Component() {
  return (
<div class="w-full h-screen bg-gray-100 dark:bg-gray-900">
  <div class="flex items-center justify-center h-full">
    <div class="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <div class="flex items-center justify-center">
        <img
          src="/placeholder.svg"
          alt="Microsoft Logo"
          width="120"
          height="60"
          class="h-12 w-auto"
          style="aspect-ratio: 120 / 60; object-fit: cover;"
        />
      </div>
      <h2 class="text-2xl font-bold text-center mt-4 mb-8">Pest Control Booking System</h2>
      <div class="space-y-4">
        <p class="text-center text-gray-600 dark:text-gray-400">Please sign in with your Microsoft Account</p>
        <button class="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-blue-500 text-white flex items-center justify-center">
          <img
            src="/placeholder.svg"
            alt="Microsoft Logo"
            width="20"
            height="20"
            class="mr-2"
            style="aspect-ratio: 20 / 20; object-fit: cover;"
          />
          Sign in with Microsoft
        </button>
      </div>
    </div>
  </div>
</div>
