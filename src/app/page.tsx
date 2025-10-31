// "use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import { LogoutButton } from "./logout";

const page = async () => {
  await requireAuth();

  const data = await caller.getUsers();
  
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      protected page
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <LogoutButton />
    </div>
  );
};

export default page;
