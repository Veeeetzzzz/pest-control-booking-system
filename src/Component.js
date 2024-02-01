import React, { useState } from 'react';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from './authConfig';
import './Component.css';

export default function Component() {
  const { instance } = useMsal();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          <img src="/placeholder.svg" alt="Placeholder" className="h-12" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-8">Pest Control Booking System</h2>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
          <button
            onClick={() => handleLogin("popup")}
            className="mt-8 mb-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Sign in with Microsoft
          </button>
        </div>
      </div>
    </div>
  );
}
