'use client';

import { signIn, useSession } from "next-auth/react";
import React from "react";


export default function Page() {
  const { data: session } = useSession()
  return (
    <main className="flex flex-col">
      <div>{session?.user?.email}</div>
      <button onClick={() => signIn("github")}>Github Login</button>
    </main>
  )
}