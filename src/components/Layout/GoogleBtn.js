import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const styles = {
  img: {
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    border: '2px solid #bdc3c7',
  },
  dropdown: {
    background: 'transparent',
    borderColor: 'transparent',
  },
};

const GoogleBtn = () => {
  const CLIENT_ID =
    '799482256036-d2phg6u6rs9pun3g54eip037qbcn6bn3.apps.googleusercontent.com';
  const current = null;
  const handleLoginSuccess = (response) => {};
  const handleLogoutSuccess = (response) => {};
  const handleLoginFailure = (response) => {};
  const handleLogoutFailure = (response) => {};
  return (
    <>
      {current ? (
        <>
          <div class='dropdown'>
            <button
              class='btn btn-secondary dropdown-toggle'
              type='button'
              id='dropdownMenuButton2'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              <img
                width='32'
                height='32'
                src='data:image/png;base64,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'
                style={styles.img}
                alt='profile'
              />
            </button>
            <ul
              style={styles.dropdown}
              class='dropdown-menu dropdown-menu-dark'
              aria-labelledby='dropdownMenuButton2'
            >
              <li>
                <GoogleLogout
                  clientId={CLIENT_ID}
                  buttonText='Logout'
                  onLogoutSuccess={handleLogoutSuccess}
                  onFailure={handleLogoutFailure}
                />
              </li>
            </ul>
          </div>
        </>
      ) : (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText='Login'
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          cookiePolicy={'single_host_origin'}
          responseType='code,token'
        />
      )}
    </>
  );
};
export default GoogleBtn;
