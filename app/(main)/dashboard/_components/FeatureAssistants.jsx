"use client"
import React from "react";
import {useUser} from "@stackframe/stack";
import { Button } from "@/components/ui/button";
import { CoachingOptions } from "../../../../services/Options";
import Image from "next/image";
import UserInputDialog from "./UserInputDialog";
function FeatureAssistants() {
  const user = useUser();
    return (
    <div>
        <div className="flex justify-between items-center mb-8">
            <div>
            <h2 className="font-medium text-gray-500">Feature Assistants</h2>
            <h2 className="text-3xl font-bold">Welcome back, {user?.displayName}</h2>
            </div>
            <Button>Profile</Button>
        </div>
        
        <div className="grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 m-5 gap-x-10 gap-y-6 place-items-center">
          {CoachingOptions.map((options, index)=>(
            <UserInputDialog CoachingOptions={options} key={index}>
            <div key={index} className="p-2 bg-secondary rounded-2xl flex flex-col justify-center items-center gap-4 hover:scale-105 transition-transform cursor-pointer">
              <Image src={options.icon} alt={options.name}
              width={150}
              height={150}
              className="h-[70px w-[70px]"
              />
            <h2 className="text-black text-bold">{options.name}</h2>
            </div>
            
            </UserInputDialog>
          ))}
        </div>
    </div>
  );
}   
export default FeatureAssistants;
