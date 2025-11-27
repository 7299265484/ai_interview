// import axios from "axios"

// export const getToken = async()=>{
//     const result = await axios.get('/api/getToken');

//     return result.data;
// }
import axios from "axios";
import { OpenAI } from "openai";
import { CoachingOptions } from "./Options";
import { PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly";

export const getToken = async () => {
  const result = await axios.get("/api/getToken");
  return result.data.token;
};

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.NEXT_PUBLIC_AI_OPENROUTER,
  dangerouslyAllowBrowser: true
  
})
export const AIModel = async (topic, coachingOption, lastTwoConversation) => {
  const option = CoachingOptions.find((item) => item.name == coachingOption)
  console.log("Selected Option:", option);
  if (!option) {
  console.error("Invalid coachingOption:", coachingOption);
  return { role: "assistant", content: "⚠️ No matching coaching option found." };
}
  const PROMPT = (option.prompt).replace('{user_topic}', topic)

  try {
    const completion = await openai.chat.completions.create({
      model: "x-ai/grok-4.1-fast:free",
      messages: [
        { role: "assistant", content: PROMPT },   // coaching instruction
        ...lastTwoConversation        // transcript from user
      ],
    });

    const aiResp = completion.choices[0].message
    console.log("AI Response:", aiResp);

    return aiResp; // ✅ return so you can use it in page.jsx
  } catch (error) {
    console.error("AIModel error:", error);
    return null;
  }
}

export const ConvertTextToSpeech = async (text, expertName) => {
    const pollyClient=new PollyClient({
        region: 'us-east-1',
        credentials:{
            accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY
        }
    })
    const command=new SynthesizeSpeechCommand({
      Text: text,  
      OutputFormat:'mp3',
      VoiceId:"Joanna"
        
  } )
  try {
    const {AudioStream}= await pollyClient.send(command);
    const audioArrayBuffer=await AudioStream.transformToByteArray();
    const audioBlob=new Blob([audioArrayBuffer], {type:'audio/mp3'})
    const audioUrl=URL.createObjectURL(audioBlob);
    return audioUrl;
  }catch(e){
    console.error("Error in ConvertTextToSpeech:", e);
    return null;
  }
}

