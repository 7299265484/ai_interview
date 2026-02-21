"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { useUser } from "@stackframe/stack";
import { Progress } from "@/components/ui/progress";
import { UserContext } from "@/app/_context/UserContext";
import { Wallet2 } from "lucide-react";
import { Button } from "@/components/ui/button";

function Credits() {
  const { userData } = useContext(UserContext);
  const user = useUser();

  const CalculateProgress=()=>{
    if(userData?.subscriptionID){
      console.log("Subscribed User Progress:", ((userData?.credit) / 50000) * 100);
        return ((userData?.credit) / 50000) * 100;
      
    } 
    else{
      console.log("Free User Progress:", ((userData?.credit) / 5000) * 100);
      return ((userData?.credit) / 5000) * 100;
    }  
}

  return (
    <div>
      {/* Profile row */}
      <div className="flex items-center gap-5">
        <Image
          src={user?.profileImageUrl || "/default-avatar.png"} // ✅ fallback image
          width={60}
          height={60}
          alt="User Picture"
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h2 className="text-lg font-bold">Name: {user?.displayName}</h2>
          <h2 className="text-gray-500">Email: {userData?.email}</h2>
        </div>
      </div>

      <hr className="my-4" />

      {/* Credits section */}
      <div>
        <h2 className="text-gray-500">
          Your credits are used to generate AI coaching sessions.
        </h2>
        <h2>
          {userData?.credit}/{userData?.subscriptionID?'50000' : '5000'}
        </h2>
        <Progress
        
          value={CalculateProgress()}
          className="my-3"
        />

        <div className="flex justify-between items-center mt-3">
            <h2 className="font-bold">Current Plan: Premium</h2>
            <h2 className="p-1 bg-secondary rounded-lg px-2">Free Plan</h2>
        </div>
        <hr className="my-3"></hr>
        <div className="mt-5 p-5 border  rounded-2xl">
            <div className="flex justify-between">
                <div>
                <h2 className="font-bold">Pro Plan</h2>
                <h2>50,000 Tokens</h2>
                </div>
                <h2 className="text-green-500">$10/Month</h2>
            </div>
            <hr className="mt-3 border-gray-300"></hr>
            <Button className="mt-3 w-full"><Wallet2 className="w-4 h-4 mr-2" /> Buy Credits</Button>
        </div>
      </div>
    </div>
  );
}

export default Credits;
