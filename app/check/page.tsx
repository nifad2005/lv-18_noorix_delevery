"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <h1>Welcome {session?.user?.name}</h1>
        {/* <Image src={session?.user?.image} alt="user" width={50} height={50} /> */}
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  }

  return (
    <>
      <h1>You are not signed in</h1>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    </>
  );
}
