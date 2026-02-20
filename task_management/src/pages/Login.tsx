// src/pages/Login.tsx

import { useAuth0 } from "@auth0/auth0-react";
import type { Auth0User } from "../types/auth";

const Login = () => {
  const { loginWithRedirect } = useAuth0<Auth0User>();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Login</h1>
      <button onClick={() => loginWithRedirect()}>
        Log In
      </button>
    </div>
  );
};

export default Login

