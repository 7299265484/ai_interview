"use client";
import React, { use } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CoachingExpert } from "../../../../services/Options"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useMutation } from "convex/react";
import { v } from "convex/values";
import { api } from "@/convex/_generated/api"
import { LoaderCircle } from "lucide-react"   
import { useQuery } from "convex/react"
import clsx from 'clsx'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useUser} from "@stackframe/stack";

function UserInputDialog({children, CoachingOptions}) {
    const [selectedExpert, setSelectedExpert] = useState();
    const [topic, setTopic] = useState();
    const createDiscussionRoom= useMutation(api.DiscussionRoom.CreateNewRoom);
    const [loading, setLoading]= useState(false); 
    const [openDialog, setOpenDialog]= useState(false);
    const router = useRouter(); 
    //const {userData}=useContext(UserContext);
    const createUser = useMutation(api.users.CreateUser); 

    const user  = useUser();
    

    const OnClickNext = async () => {
  setLoading(true);

  // Ensure user exists in Convex
  const convexUser = await createUser({
     name: user.displayName ?? "", 
    email: user.primaryEmail,
  });

  // Create discussion room linked to this user
  const result = await createDiscussionRoom({
    topic,
    coachingOption: CoachingOptions?.name,
    expertName: selectedExpert,
    uid: convexUser._id, // ✅ Convex user ID
  });

  console.log("Discussion Room Created:", result);
  setLoading(false);
  router.push("/discussion-room/" + result);
};

    return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger className="px-4 py-2 bg-gray text-black rounded">
        {children}
      </DialogTrigger>
     <DialogContent className="max-w-2xl">
  <DialogHeader>
    <DialogTitle className="text-xl font-semibold">
      {CoachingOptions.name}
    </DialogTitle>
    <div className="mt-4">
      <div className="mt-6 space-y-8">
        
        {/* Topic Input */}
        <div className="space-y-3">
          <p className="text-sm text-gray-600">
            Enter a topic to master your skills in {CoachingOptions.name}
          </p>
          <Textarea
            placeholder="Enter your topic here..."
            onChange={(e) => setTopic(e.target.value)}
            className="min-h-[80px]"
          />
        </div>

        {/* Expert Selection */}
        <div className="space-y-4">
          <p className="text-sm font-medium text-gray-700">
            Select an Expert Coach
          </p>

          <div className="flex flex-wrap gap-6">
            {CoachingExpert.map((expert, index) => (
              <div
                key={index}
                onClick={() => setSelectedExpert(expert.name)}
                className={`flex flex-col items-center gap-2 cursor-pointer transition-all
                  ${
                    selectedExpert === expert.name
                      ? "opacity-100"
                      : "opacity-80 hover:opacity-100"
                  }`}
              >
                <div
                  className={`p-1 rounded-2xl transition-all
                    ${
                      selectedExpert === expert.name
                        ? "ring-2 ring-gray-400"
                        : "ring-1 ring-gray-200"
                    }`}
                >
                  <Image
                    src={expert.avatar}
                    alt={expert.name}
                    width={80}
                    height={80}
                    className="rounded-xl object-cover"
                  />
                </div>

                <span className="text-sm text-gray-700 text-center">
                  {expert.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex justify-end gap-3 pt-4 border-t">
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>

          <Button
            disabled={!topic || !selectedExpert || loading}
            onClick={OnClickNext}
          >
            {loading && (
              <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
            )}
            Next
          </Button>
        </div>

      </div>
    </div>
  </DialogHeader>
</DialogContent>

    </Dialog>
  );
}



export default UserInputDialog


