"use client";

import React, { useState, useEffect } from "react";
import AppHeader from "./_components/AppHeader";
import { UserContext } from "@/app/_context/UserContext";
import { useUser } from "@stackframe/stack";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function DashboardClientLayout({ children }) {
  const stackUser = useUser();
  const createUser = useMutation(api.users.CreateUser);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const setupUser = async () => {
      if (stackUser?.primaryEmail) {
        const convexUser = await createUser({
          name: stackUser.displayName ?? "",
          email: stackUser.primaryEmail,
        });
        setUserData(convexUser);
      }
    };
    setupUser();
  }, [stackUser]);

  return (
    <UserContext.Provider value={{ userData }}>
      <AppHeader />
      <div className="p-10 mt-14 md:px-20 lg:px-32 xl:px-48 2xl:px-56">
        {children}
      </div>
    </UserContext.Provider>
  );
}