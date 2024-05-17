"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";

export const LoginLogout = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div>
      {!user && (
        <div>
          <a href="/api/auth/login">Login</a>
        </div>
      )}
      {user && (
        <div>
          <a href="/profile-client">Go to Dashboard</a>
          <a href="/api/auth/logout">Logout</a>
        </div>
      )}
    </div>
  );
};
