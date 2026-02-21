"use client";
import { useParams } from 'next/navigation';
import React from 'react'
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { CoachingOptions } from '@/services/Options';
import Image from 'next/image';
import moment from 'moment';
import ChatBox from "@/app/(main)/discussion-room/[roomid]/_components/ChatBox";
import SummaryBox from '@/app/(main)/discussion-room/[roomid]/_components/_components/SummaryBox';


function ViewSummary() {
    const { roomid } = useParams();
    const DiscussionRoomData = useQuery(api.DiscussionRoom.GetDiscussionRoom,{ id: roomid });
    const GetAAbstractImages = (option) => {
        const match = CoachingOptions.find((item) => item.name === option);
        return match?.abstract ?? "/feedback3.jpg";
      };
    return (
        <div className='-mt-10'>
            <div className='flex justify-between items-end'>
            <div className='flex gap-7 items-center'>
                <Image src={GetAAbstractImages(DiscussionRoomData?.coachingOption)} alt="abstract" width={100} height={100}
                className="rounded-full h-[50px] w-[50px]"/>
                <div>
                        <h2 className='font-bold text-lg'>{DiscussionRoomData?.topic}</h2>
                        <h2>{DiscussionRoomData?.coachingOption}</h2>
                        {/* <h2>{DiscussionRoomData?.expertName}</h2> */}
                        
                </div>
                
            </div>
            <h2 className="text-gray-400">{moment(DiscussionRoomData?._creationTime).fromNow()}</h2>
            
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 mt-5'>
                <div className='col-span-2'>
                    <h2 className='text-ls font-bold mb-6'>Summary of the Discussion</h2>
                    <SummaryBox
  summary={DiscussionRoomData?.summary}/>

                </div>
                
                <div className='col-span-2 '>
                    <h2 className='text-ls font-bold mb-6'>Conversation</h2>
                    {DiscussionRoomData?.conversation && <ChatBox conversation={DiscussionRoomData?.conversation} 
                    coachingOption={DiscussionRoomData?.coachingOption}
                    enableFeedbackNotes={false}/>}
                </div>

            </div>

        </div>
    )
}
export default ViewSummary;