'use client';

import { signIn, signOut, useSession } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Welcome, {session.user.name}</p>
        <button onClick={() => signOut()}>সাইন আউট</button>
      </div>
    );
  }

  return (
    <div>
      <p>তুমি লগইন করোনি</p>
      <button onClick={() => signIn("google")}>গুগল দিয়ে লগইন করো</button>
    </div>
  );
}
