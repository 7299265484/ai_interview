"use client";
import React, { useState } from "react";
import { useUser } from "@stackframe/stack";
import { Button } from "@/components/ui/button";
import { CoachingOptions } from "../../../../services/Options";
import Image from "next/image";
import UserInputDialog from "./UserInputDialog";
import ProfileDialog from "./ProfileDialog";

function FeatureAssistants() {
  const user = useUser();
  const [selectedOption, setSelectedOption] = useState(null); // ✅ track selected

return (
  <div>
    {/* Header */}
    <div className="flex justify-between items-center mb-8">
      <div>
        <h2 className="font-medium text-gray-500">Feature Assistants</h2>
        <h2 className="text-3xl font-bold">
          Welcome back, {user?.displayName}
        </h2>
      </div>
      <ProfileDialog>
        <Button>Profile</Button>
      </ProfileDialog>
    </div>

    {/* Options - Left to Right */}
    <div className="flex flex-wrap gap-6 m-5 justify-center colour-bgobject-contain opacity-70 grayscale
           group-hover:opacity-100 group-hover:grayscale-0">
      {CoachingOptions.map((options, index) => (
        <UserInputDialog CoachingOptions={options} key={index}>
          <div
  onClick={() => setSelectedOption(options.name)}
  className={`w-[160px] h-[140px] p-4 bg-gray-50 rounded-xl
            flex flex-col items-center justify-center gap-3
            cursor-pointer transition-all

            border border-gray-200
            shadow-[0_1px_2px_rgba(0,0,0,0.05)]

            hover:bg-white hover:shadow-md hover:-translate-y-1

            ${
              selectedOption === options.name
                ? "bg-white border-gray-400 shadow-md"
                : ""
            }`}

>

            <Image
              src={options.icon}
              alt={options.name}
              width={64}
              height={64}
              className="object-contain"
            />
            <h2 className="text-sm font-semibold text-gray-800 text-center">
              {options.name}
            </h2>
          </div>
        </UserInputDialog>
      ))}
    </div>
  </div>
);
}

export default FeatureAssistants;
