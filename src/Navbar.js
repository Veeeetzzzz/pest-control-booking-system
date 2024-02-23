import React from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from './AuthConfig';

//This is not ready yet.
//To do: Update Avatar button to pull through profile of user who has signed in

const Navbar = () => {
  const { instance, accounts } = useMsal();
  const [userAvatar, setUserAvatar] = useState(null);

  useEffect(() => {
    const fetchUserProfilePhoto = async () => {
      if (accounts.length > 0) {
        try {
          const response = await instance.acquireTokenSilent({
            ...loginRequest,
            account: accounts[0],
          });

          const photoResponse = await fetch('https://graph.microsoft.com/v1.0/me/photo/$value', {
            headers: new Headers({
              'Authorization': `Bearer ${response.accessToken}`,
            }),
            method: 'GET',
          });

          if (photoResponse.status === 200) {
            const imageBlob = await photoResponse.blob();
            const imageUrl = URL.createObjectURL(imageBlob);
            setUserAvatar(imageUrl);
          } else {
            // Handle the case where the user doesn't have a profile picture
            // For example, set to a default image
            setUserAvatar('/path/to/default/avatar.jpg');
          }
        } catch (e) {
          console.error(e);
          // Handle the case where the token could not be acquired or the network request failed
        }
      }
    };

    fetchUserProfilePhoto();
  }, [instance, accounts]);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Pest Control Case Management</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="User avatar" src={userAvatar} />
            </div>
          </div>
          <ul tabIndex="0" className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
