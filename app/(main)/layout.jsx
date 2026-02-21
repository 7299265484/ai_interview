"use client";
import React, { useState, useEffect } from "react";
import AppHeader from "./_components/AppHeader";
import { UserContext } from "@/app/_context/UserContext";
import { useUser } from "@stackframe/stack"; // Stack API hook
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

function DashboardLayout({ children }) {
  const stackUser = useUser(); // Google login user
  const createUser = useMutation(api.users.CreateUser);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const setupUser = async () => {
      if (stackUser?.primaryEmail) {
        const convexUser = await createUser({
          name: stackUser.displayName ?? "",
          email: stackUser.primaryEmail,
        });
        setUserData(convexUser); // ✅ store Convex user record
      }
    };
    setupUser();
  }, [stackUser]);

  return (
    <UserContext.Provider value={{ userData }}>
      <div>
        <AppHeader />
        <div className="p-10 mt-14 md:px-20 lg:px-32 xl:px-48 2xl:px-56">
          {children}
          
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default DashboardLayout;
