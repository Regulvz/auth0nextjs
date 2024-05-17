"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function page() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>

      <div>
        <a href="/api/auth/logout">Logout</a>
      </div>

      <div>
        <a href="/register">Registrar</a>
      </div>
    </div>
  );
}
