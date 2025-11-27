"use client";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import React, { useEffect, useState } from "react";
import { useUser } from "@stackframe/stack";
import { UserContext } from "./_context/UserContext";

function AuthProvider({ children }) {
  const user = useUser();
  const createUserMutation = useMutation(api.users.CreateUser);
  const {userData, setUserData} = useState();
  useEffect(() => {
    console.log("User info:", user);
    if (user) {
      createNewUser();
    }
  }, [user]);

  const createNewUser = async () => {
    const result = await createUserMutation({
      name: user?.displayName,
      email: user?.primaryEmail,
    });
    console.log("CreateUser result:", result);
    // Logic to create a new user in the database
  };

  return <div>
    <UserContext.Provider value={{userData, setUserData}}>
        {children}
        </UserContext.Provider>
  </div>;
}

export default AuthProvider;
