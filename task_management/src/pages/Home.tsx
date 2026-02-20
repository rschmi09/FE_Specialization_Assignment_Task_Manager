// src/pages/Home.tsx

import { useAuth0 } from "@auth0/auth0-react";
import type { Auth0User } from "../types/auth";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0<Auth0User>();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isAuthenticated) {
    return <Navigate to='/' />;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Task Manager</h1>
      <p>Please log in to continue.</p>
      <button onClick={() => loginWithRedirect()}>
        Log In
      </button>
    </div>
  );
};

export default Home