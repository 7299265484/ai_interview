// import React from "react";
// import { NextResponse } from "next/dist/server/web/spec-extension/response";
// import { Readable } from "stream";
// import { AssemblyAI } from "assemblyai";
// import recorder from "node-record-lpcm16";

// const assemblyAi = new AssemblyAI({apiKey: process.env.ASSEMBLY_AI_API_KEY});
// export async function GET(req) {
//     const token = await client.streaming.createTemporaryToken({ expires_in_seconds: 200 })
//     return NextResponse.json(token); 
// }

import { AssemblyAI } from "assemblyai";
import { NextResponse } from "next/server";

export async function GET() {
  const client = new AssemblyAI({
    apiKey: process.env.ASSEMBLYAI_API_KEY, // keep secret in .env.local
  });

  try {
    // Generate a temporary token valid for 60 seconds
    const token = await client.streaming.createTemporaryToken({
      expires_in_seconds: 60,
      max_session_duration_seconds: 600, // optional, up to 3 hours
    });

    return NextResponse.json({ token });
  } catch (error) {
    console.error("Error generating token:", error.response?.data || error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


