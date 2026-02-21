"use client";
import React, { useContext } from "react";
import { useQuery } from "convex/react";
import { UserContext } from "@/app/_context/UserContext";
import { api } from "@/convex/_generated/api";
import { CoachingOptions } from "@/services/Options";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // adjust path to where your Button lives
import moment from "moment";
import Link from "next/link";


function Feedback() {
    const { userData } = useContext(UserContext);
    
  
    // ✅ useQuery handles fetching automatically
    const discussionRoomList = useQuery(
      api.DiscussionRoom.GetAllDiscussionRoom,
      userData ? { uid: userData._id } : "skip"
    );
  
    if (discussionRoomList === undefined) {
      return <div>Loading history…</div>; // shows while query is fetching
    }
    
  const GetAAbstractImages = (option) => {
    const match = CoachingOptions.find((item) => item.name === option);
    return match?.abstract ?? "/feedback3.jpg";
  };
  
  
  
    return (
      <div>
        <h2 className="font-bold text-gray-500 text-xl">Feedback</h2>
        {!discussionRoomList?.length && (
          <h2 className="text-grey-400">No feedback yet.</h2>
        )}
  
        <div className="mt-5">
          {discussionRoomList?.map((item, index) => (
            <div key={index} className="p-4 border-b mb-4 group flex justify-between items-center cursor-pointer hover:bg-gray-100 rounded-lg">
              <div className="flex gap-7 items-center">
                <Image src={GetAAbstractImages(item.coachingOption)} alt="abstract" width={100} height={100}
                className="rounded-full h-[50px] w-[50px]"/>
                <div>
              <h2>{item.topic}</h2>
              <h2>{item.coachingOption}</h2>
              <h2>{item.expertName}</h2>
              <h2 className="text-gray-400 text-sm">{moment(item._creationTime).fromNow()}</h2>
              <small>
                Created: {new Date(item._creationTime).toLocaleString()}
              </small>
              </div>
              </div>
              <Link href={`/view-summary/${item._id}`}>
              <Button variant="outline" className="group-hover:block hidden">View Feedback</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }  
export default Feedback;