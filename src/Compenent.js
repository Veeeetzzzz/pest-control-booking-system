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
