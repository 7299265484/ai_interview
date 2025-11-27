"use client"
import React, { use, useEffect } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { CoachingExpert } from "../../../../services/Options";
import { useState , useRef} from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser, useStackApp, UserButton } from "@stackframe/stack";
import { disconnect } from "process";
import RecordRTC from "recordrtc"; 
import { get } from "http";
import { Loader2Icon } from "lucide-react";
import { StreamingTranscriber } from "assemblyai";
import { getToken } from "../../../../services/GlobalServices";
import { RealtimeTranscriber } from "@/lib/RealtimeTranscriber";
import { AIModel } from "../../../../services/GlobalServices";
import ChatBox from "./_components/ChatBox";
import { ConvertTextToSpeech } from "../../../../services/GlobalServices";

function DiscussionRoom() {

    const {roomid} = useParams();
    const DiscussionRoomData = useQuery(api.DiscussionRoom.GetDiscussionRoom,{ id: roomid });

    const [expert, setExpert] = useState();
    const [enableMic, setEnableMic]= useState(false);
    const recorder = useRef(null);
    let silenceTimeout = null;
    const realtimeTranscriber = useRef(null);
    const [transcriber, setTranscriber] = useState();
    const [audioUrl, setAudioUrl]= useState();
    const [conversation, setConversation] = useState([
      {
        role: 'assistant',
        content: "Hi"
      },
      {
        role: 'user',
        content: "Hello" 
      }
    ]);
    const[loading, setLoading]= useState(false);
    const texts = useRef({});

    useEffect(() => {
    if (DiscussionRoomData) {
         const Expert = CoachingExpert.find(item => item.name == DiscussionRoomData.expertName);
    console.log(Expert);
    setExpert(Expert);
    }
  }, [DiscussionRoomData]) 



const connectToServer = async () => {
  setEnableMic(true);
  setLoading(true);
  // 1. Get a temporary token from your backend
  const token = await getToken();

  // 2. Initialize the new StreamingTranscriber
  realtimeTranscriber.current = new StreamingTranscriber({
    token,
    sampleRate: 16000,
    formatTurns: true, // optional, formats speaker turns
  });

  // 3. Set up event listeners
  realtimeTranscriber.current.on("open", ({ id }) => {
    console.log(`Session opened with ID: ${id}`);
  });

  realtimeTranscriber.current.on("error", (error) => {
    console.error("Error:", error);
  });

  realtimeTranscriber.current.on("close", (code, reason) => {
    console.log("Session closed:", code, reason);
  });

  realtimeTranscriber.current.on("turn", async(turn) => {
  
  if (turn.transcript && turn.end_of_turn){
    console.log("Transcript received:", turn.transcript);

    
    let msg = '';
    if (turn.end_of_turn) {
      setConversation((prev) => [...prev,{
        role:'user',
        content: turn.transcript
      }]);

      
    }
    texts[turn.audio_start] = turn.transcript;

    const keys = Object.keys(texts);
    keys.sort((a, b) => a - b);

    for (const key of keys) {
      if (texts[key]) {
        msg += `${texts[key]} `
      }
    }

    setTranscriber(msg);
  }
  }
);

  // 4. Connect to AssemblyAI
  await realtimeTranscriber.current.connect();
  setLoading(false);
  // 5. Capture microphone audio in the browser
  if (typeof window !== "undefined" && typeof navigator !== "undefined") {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        recorder.current = new RecordRTC(stream, {
          type: "audio",
          mimeType: "audio/wav",
          recorderType: RecordRTC.StereoAudioRecorder,
          timeSlice: 250,
          desiredSampRate: 16000,
          numberOfAudioChannels: 1,
          bufferSize: 4096,
          audioBitsPerSecond: 128000,
          ondataavailable: async (blob) => {
            clearTimeout(silenceTimeout);

            const buffer = await blob.arrayBuffer();
            console.log("Audio data available:", buffer);

            // 6. Send audio chunks to the transcriber
            if (realtimeTranscriber.current) {
              await realtimeTranscriber.current.sendAudio(buffer);
            }

            silenceTimeout = setTimeout(() => {
              console.log("User stopped talking");
            }, 2000);
          },
        });

        recorder.current.startRecording();
      })
      .catch((err) => console.error("Mic error:", err));
  }
}

useEffect(() => {
  async function fetchData() {
    if(conversation[conversation.length -1].role === 'user'){
      const lastTwoMsg = conversation.slice(-2);
      const aiResp = await AIModel(DiscussionRoomData.topic, 
        DiscussionRoomData.coachingOption,
        lastTwoMsg);
        console.log("AI Reply:", aiResp);
        const url=await ConvertTextToSpeech(aiResp.content, DiscussionRoomData.expertName);
        console.log("Audio URL:", url);
        setAudioUrl(url);
      setConversation(prev => [...prev,aiResp])
}
  }fetchData()
}, [conversation])

  const disconnectMic = async (e) => {
  e.preventDefault();
    setLoading(true); 
  if (realtimeTranscriber.current && typeof realtimeTranscriber.current.disconnect === 'function') {
    await realtimeTranscriber.current.disconnect();
  }

  if (recorder.current) {
    recorder.current.pauseRecording();
    recorder.current = null;
  }

  setEnableMic(false);
  // disconnect from voice server
  setLoading(false);
};

   
    return (
    <div className="mt-12">
      <h2 className="text-lg font-bold">{DiscussionRoomData?.coachingOption}</h2>
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
            <div className=' h-[60vh] bg-secondary border rounded-4xl
             flex flex-col justify-center items-center relative'>
                
                <Image src={expert?.avatar} alt = 'Avatar' width={200} height={200} 
                className="h-[80px] w-[80px] rounded-full object-cover animate-pulse"/>
                <h2 className="text-black text-bold mt-5 animate-pulse">{DiscussionRoomData?.expertName}</h2>
                <audio src={audioUrl} tupe="audio/mp3" autoPlay/>
                <div className="p-5 gb-gray-200 px-10 rounded-lg absolute bottom-10 right-10">
                    <UserButton/>
                </div>
                </div>
                <div className="mt-5 flex items-center justify-center">
                    {!enableMic ? <Button onClick={connectToServer} disabled={loading}>{loading &&<Loader2Icon className='animate-spin '/> }Conncet</Button>
                    :
                    <Button variant = "destructive" onClick={disconnectMic} disabled={loading} >{loading &&<Loader2Icon className='animate-spin '/> } Disconnect</Button>}
                </div>
            </div>
            <div> 
            <ChatBox conversation={conversation}/>
            </div>
            <div>
              <h2>{transcriber} </h2>
            </div>
        </div>
    </div>
  );
}   
export default DiscussionRoom;