
"use client"
import React from "react";
import { useRouter } from 'next/router';
export default function DownloadCV() {
  
    const router = useRouter()

    const handleDownload = () => {
        setDownload(true)
        console.log("file downloaded")
    }

    return (
        <button onClick={handleDownload}>Download Resume</button>
    )

}