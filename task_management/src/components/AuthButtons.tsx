// src/components/AuthButtons.tsx

import { useAuth0 } from "@auth0/auth0-react";
import type { Auth0User } from "../types/auth";

const AuthButtons = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0<Auth0User>();

  return (
    <div style={{ marginBottom: "20px" }}>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>
          Log In
        </button>
      )}

      {isAuthenticated && user && (
        <>
          <p>Welcome {user?.name}</p>
          {user.avatar && <img src={user.avatar} alt="Profile" style={{ width: 50, borderRadius: "50%" }} />}
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        </>
      )}
    </div>
  );
};

export default AuthButtons;

