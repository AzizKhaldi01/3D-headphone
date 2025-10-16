"use client";

import { Maximize2, Minimize2 } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import roomImage from "../../../public/img/room.png";
import { PiHandTapBold } from "react-icons/pi";

export function ExampleViewer() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFullscreen]);

  if (isMobile && !isFullscreen) {
    return (
      <>
        <h2 className="text-3xl font-bold text-center mb-8">Demo</h2>
        <div
          className="relative w-full aspect-[16/9] max-w-5xl mx-auto cursor-pointer"
          onClick={() => setIsFullscreen(true)}
        >
          <Image
            src={roomImage}
            alt="Demo Preview"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/10 rounded-lg flex flex-col items-center justify-center gap-3">
            <PiHandTapBold className="w-10 h-10 text-white " />
            <p className="text-white text-lg font-medium px-4 text-center">
              Tap to explore the room
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-8">Demo</h2>
      <div
        className={`w-full aspect-[16/9] max-w-5xl mx-auto ${
          isFullscreen
            ? "fixed h-screen w-screen top-0 right-0 z-50 max-w-none aspect-auto"
            : "relative"
        }`}
      >
        <button
          onClick={() => {
            setIsFullscreen(!isFullscreen);
          }}
          className={`absolute z-[100] p-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg backdrop-blur-md transition-colors group ${
            isFullscreen
              ? "top-5 right-1/2 transform translate-x-[50%]"
              : "top-4 left-1/2 transform -translate-x-1/2"
          }`}
          aria-label="Fullscreen"
        >
          {!isFullscreen ? (
            <Maximize2 className="w-6 h-6 transition-transform group-hover:scale-110" />
          ) : (
            <Minimize2 className="w-6 h-6 transition-transform group-hover:scale-110" />
          )}
        </button>
        <iframe
          id="Demo-iframe"
          src="https://app.comra.ai/5169174f-e75c-4247-b581-f6972b3e0fdb"
          className={`w-full h-full border-0 ${
            !isFullscreen ? "rounded-lg shadow-lg" : ""
          }`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </>
  );
}
