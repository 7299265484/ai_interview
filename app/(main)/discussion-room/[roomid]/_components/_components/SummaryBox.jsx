"use client";
import React from "react";
import ReactMarkdown from "react-markdown";

function SummaryBox({ summary }) {
  return (
    <div className="h-[60vh] w-full bg-secondary border rounded-4xl p-4 overflow-y-scroll">
      <h2 className="font-bold mb-2">Summary</h2>
      <ReactMarkdown >
      {summary}

      </ReactMarkdown>
    </div>
  );
}

export default SummaryBox;
