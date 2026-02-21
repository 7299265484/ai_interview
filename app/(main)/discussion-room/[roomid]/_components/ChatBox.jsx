// import React, {useState} from "react";
// import { CoachingOptions } from "../../../../../services/Options";
// import { LoaderCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { AIModelToGenerateFeedbackAndNotes } from "../../../../../services/GlobalServices";
// import { useMutation } from "convex/react";
// import { useParams } from "next/navigation";
// import { api } from "../../../../../convex/_generated/api";
// import Link from "next/link";
// import { useRouter } from "next/navigation";


// function ChatBox({conversation, enableFeedbackNotes, coachingOption}) {
//   const [loading, setLoading]= React.useState(false);
//   const updateSummary = useMutation(api.DiscussionRoom.UpdateSummary);
//   const {roomid}=useParams();
//   const GenerateFeedbackNotes= async()=>{
//     setLoading(true);
//     try{
//     const result = await AIModelToGenerateFeedbackAndNotes( coachingOption, conversation);
//     console.log("Feedback and Notes:", result.content);
    
//     await updateSummary({
//       id: roomid,
//       summary: result.content
//     });
//     setLoading(false);
//     console.log("Feedback and notes generated successfully!");
//   }
//   catch(error){
//     console.error("Error generating feedback and notes:", error);
//     console.log("Error generating feedback and notes.");
//     setLoading(false);

//   }
//   const router = useRouter();

// const GenerateFeedbackNotes = async () => {
//   setLoading(true);
//   try {
//     const result = await AIModelToGenerateFeedbackAndNotes(coachingOption, conversation);
//     console.log("Feedback and Notes:", result.content);

//     await updateSummary({
//       id: roomid,
//       summary: result.content,
//     });

//     console.log("Feedback and notes generated successfully!");
//     // ✅ redirect to view-summary page
//     router.push(`/view-summary/${roomid}`);
//   } catch (error) {
//     console.error("Error generating feedback and notes:", error);
//   } finally {
//     setLoading(false);
//   }
// };

//   }
  
//   return (
//     <div>
//     <div className=' h-[60vh] w-[500px] bg-secondary border rounded-4xl
//              flex flex-col  relative p-4 overflow-y-scroll'>
//             {/* <div> */}
//                 {conversation.map((item, index) => (
//                     <div className={`flex ${item.role == 'user' && 'justify-end' } `} key={index}>  
//                         {item.role === 'assistant' ? 
//                         <h2 className="p-1 px-2 bg-primary mt-2 text-white inline-block rounded-md">{item.content}</h2> 
//                         :
//                        <h2 className="p-1 px-2 bg-gray-200 mt-2  inline-block rounded-md   justify-end">{item.content}</h2> }
//                     </div>
//                 ))}
//             {/* </div> */}
              
//             </div>
            
  
//             {!enableFeedbackNotes ?
//             <h2></h2>
//               :<Button onClick={GenerateFeedbackNotes} disabled={loading} className="mt-4 w-full">
//                 {loading && <LoaderCircle className="animate-spin mr-2"/>}
//                 Generate Feedback </Button>
//           }
//     </div>
//   );
// }
// export default ChatBox;

"use client";
import React from "react";
import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AIModelToGenerateFeedbackAndNotes } from "../../../../../services/GlobalServices";
import { useMutation } from "convex/react";
import { useParams, useRouter } from "next/navigation";
import { api } from "../../../../../convex/_generated/api";

function ChatBox({ conversation, enableFeedbackNotes, coachingOption }) {
  const [loading, setLoading] = React.useState(false);
  const updateSummary = useMutation(api.DiscussionRoom.UpdateSummary);
  const { roomid } = useParams();
  const router = useRouter(); // ✅ hook at top level

  const GenerateFeedbackNotes = async () => {
    setLoading(true);
    try {
      const result = await AIModelToGenerateFeedbackAndNotes(coachingOption, conversation);
      console.log("Feedback and Notes:", result.content);

      await updateSummary({
        id: roomid,
        summary: result.content,
      });

      console.log("Feedback and notes generated successfully!");
      // ✅ redirect to view-summary page
      router.push(`/view-summary/${roomid}`);
    } catch (error) {
      console.error("Error generating feedback and notes:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="h-[60vh] w-[500px] bg-secondary border rounded-4xl flex flex-col relative p-4 overflow-y-scroll">
        {conversation.map((item, index) => (
          <div className={`flex ${item.role === "user" && "justify-end"}`} key={index}>
            {item.role === "assistant" ? (
              <h2 className="p-1 px-2 bg-primary mt-2 text-white inline-block rounded-md">
                {item.content}
              </h2>
            ) : (
              <h2 className="p-1 px-2 bg-gray-200 mt-2 inline-block rounded-md justify-end">
                {item.content}
              </h2>
            )}
          </div>
        ))}
      </div>

      {enableFeedbackNotes && (
        <Button onClick={GenerateFeedbackNotes} disabled={loading} className="mt-4 w-full">
          {loading && <LoaderCircle className="animate-spin mr-2" />}
          Generate Feedback
        </Button>
      )}
    </div>
  );
}

export default ChatBox;
