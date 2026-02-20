// src/pages/Register.tsx

import { useAuth0 } from "@auth0/auth0-react";
import type { Auth0User } from "../types/auth";

const Register = () => {
  const { loginWithRedirect } = useAuth0<Auth0User>();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Register</h1>
      <button
        onClick={() =>
          loginWithRedirect({
            authorizationParams: {
              screen_hint: "signup",
            },
          })
        }
      >
        Sign Up
      </button>
    </div>
  );
};

export default Register;

