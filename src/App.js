import React from 'react';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useMsal, useAccount } from "@azure/msal-react";
import { msalConfig, loginRequest } from './authConfig';
import ManagerView from './ManagerView';
import OperativeView from './OperativeView';
import './App.css';
import './Login.css';

// Placeholder functions for handling login, will be replaced with actual logic later
//const App = () => {
//  const handleLogin = (event) => {
//    event.preventDefault();
    // TODO: Implement login logic
//  };

//  const handleMicrosoftSignIn = () => {
//    // TODO: Implement Microsoft Sign In logic
//  };

export default function App() {
  return (
<div class="w-full h-screen bg-cover bg-center" style="background-image:url('/placeholder.svg')">
  <div class="flex items-center justify-center h-full">
    <div class="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <div class="flex items-center justify-center">
        <img
          src="/placeholder.svg"
          alt="Microsoft Logo"
          width="120"
          height="60"
          class="h-12 w-auto"
          style="aspect-ratio:120/60;object-fit:cover"
        />
      </div>
      <h2 class="text-2xl font-bold text-center mt-4 mb-8">Pest Control Booking System</h2>
      <form class="space-y-4">
        <div class="space-y-2">
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="email"
          >
            Email
          </label>
          <input
            type="email"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="email"
            placeholder="example@domain.com"
            required=""
          />
        </div>
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="password"
            >
              Password
            </label>
            <a class="text-sm underline text-gray-600 dark:text-gray-400" href="#" rel="ugc">
              Forgot password?
            </a>
          </div>
          <input
            type="password"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="password"
            required=""
          />
        </div>
        <button
          class="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-blue-500 text-white flex items-center justify-center"
          type="submit"
        >
          <img
            src="/placeholder.svg"
            alt="Microsoft Logo"
            width="20"
            height="20"
            class="mr-2"
            style="aspect-ratio:20/20;object-fit:cover"
          />
          Sign in with Microsoft
        </button>
      </form>
    </div>
  </div>
</div>
  )
}
