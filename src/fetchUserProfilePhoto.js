import { useMsal } from '@azure/msal-react';
import { loginRequest } from './AuthConfig';

const fetchUserProfilePhoto = async () => {
  const { instance, accounts } = useMsal();
  try {
    // Get the access token silently
    const response = await instance.acquireTokenSilent({
      ...loginRequest,
      account: accounts[0]
    });

    // Use the access token to make the GET request to Microsoft Graph API
    const photoResponse = await fetch('https://graph.microsoft.com/v1.0/me/photo/$value', {
      headers: new Headers({
        'Authorization': 'Bearer ' + response.accessToken
      }),
      method: 'GET'
    });

    if (photoResponse.status === 200) {
      // If the photo exists, the binary of the image will be returned
      const imageBlob = await photoResponse.blob();
      return URL.createObjectURL(imageBlob);
    } else {
      // If the user does not have a profile photo, you can return a default image or handle accordingly
      console.error('Could not retrieve profile photo from Graph API');
    }
  } catch (e) {
    console.error(e);
  }
};

export default fetchUserProfilePhoto;
