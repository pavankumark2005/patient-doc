"use client"; // Ensure this is marked as a client component

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const VideoCall = () => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const localStreamRef = useRef(null);

  useEffect(() => {
    const startVideoCall = async () => {
      try {
        localStreamRef.current = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideoRef.current.srcObject = localStreamRef.current;
      } catch (error) {
        console.error("Error accessing media devices.", error);
      }
    };

    startVideoCall();

    return () => {
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: 'url("/backg.jpg")' }} // Update with the actual image path in your public folder
    >
      <h1 className="text-3xl font-bold mb-8">Video Call</h1>

      <div className="flex justify-around w-full max-w-3xl gap-8 mb-8">
        <video
          ref={localVideoRef}
          autoPlay
          playsInline
          className="w-72 h-48 border border-white rounded-lg"
        />
        <video
          ref={remoteVideoRef}
          autoPlay
          playsInline
          className="w-72 h-48 border border-white rounded-lg"
        />
      </div>

      <Link href="/thank">
        <button className="px-5 py-3 text-lg font-semibold bg-gray-600 rounded-lg hover:bg-gray-700 transition">
          Doc
        </button>
      </Link>
    </div>
  );
};

export default VideoCall;
