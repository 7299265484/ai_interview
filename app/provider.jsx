"use client"
import React from "react"
import { ConvexProvider, ConvexReactClient } from "convex/react";
import AuthProvider from "./AuthProvider";
import { Suspense } from "react";
const Sunspense = Suspense;
function Provider({ children }) {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
    return (
        <Sunspense fallback={<p>Loading...</p>}>
        <ConvexProvider client={convex}>
            <AuthProvider>{children}</AuthProvider>
            
        </ConvexProvider>
        </Sunspense>
    )
}   
export default Provider