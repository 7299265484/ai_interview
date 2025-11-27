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

function UserInputDialog({children, CoachingOptions}) {
    const [selectedExpert, setSelectedExpert] = useState();
    const [topic, setTopic] = useState();
    const createDiscussionRoom= useMutation(api.DiscussionRoom.CreateNewRoom);
    const [loading, setLoading]= useState(false); 
    const [openDialog, setOpenDialog]= useState(false);
    const router = useRouter(); 

    const OnClickNext=async()=>{
        setLoading(true);
        const result = await createDiscussionRoom({
            topic: topic,
            coachingOption: CoachingOptions?.name,
            expertName: selectedExpert
        })
        console.log("Discussion Room Created:", result); 
        setLoading(false);
        setOpenDialog(false);
        router.push('/discussion-room/'+result);
    }
    return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger className="px-4 py-2 bg-blue-600 text-white rounded">
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{CoachingOptions.name}</DialogTitle>
          <DialogDescription asChild>
            <div className="mt-5">
                <h2 className="text-black m-5">Enter a topic to master your skills in {CoachingOptions.name}</h2>
                <Textarea placeholder="Enter your topic here..."
                onChange={(e)=>setTopic(e.target.value)}
                />
                <h2 className="text-black m-5">Select an Expert Coach</h2>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-6 m-5">
                    {CoachingExpert.map((expert, index)=>(
                        <div key={index} onClick={()=>setSelectedExpert(expert.name)}>
                            <Image src={expert.avatar} alt={expert.name}
                            width={100}
                            height={100}    
                            className='rounded-2xl h-[80] w-[80] object-cover hover :scale-105 transition-all cursor-pointer
                            ${selectedExpert === expert.name ? "border-4 border-blue-500" : ""}
                            '
                            />
                        
                        <h2 className="text-center">{expert.name}</h2>
                        </div>
                    ))}

                </div>
                <div className="flex gap-5 justify-end m-5">
                    <DialogClose asChild>
                        <Button varient={'ghost'}>Cancel</Button>
                    </DialogClose>
                    
                    <Button disabled={!topic || !selectedExpert || loading} onClick={OnClickNext}>
                        {loading && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
                        Next</Button>
                </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}



export default UserInputDialog


