"use client";

import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  showControls?: boolean;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "9/16";
}

export function VideoPlayer({
  src,
  poster,
  className = "",
  autoPlay = true,
  loop = true,
  showControls = false,
  aspectRatio = "16/9",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(autoPlay);

  const aspectMap = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "9/16": "aspect-[9/16]",
  };

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) videoRef.current.pause();
    else videoRef.current.play();
    setPlaying(!playing);
  };

  return (
    <div className={`relative overflow-hidden bg-surface-card ${aspectMap[aspectRatio]} ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted
        playsInline
        className="w-full h-full object-cover"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      {showControls && (
        <div className="absolute inset-0 flex items-center justify-center group">
          <button
            onClick={toggle}
            className="w-14 h-14 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            style={{
              background: "rgba(13,13,13,0.7)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
            }}
          >
            {playing ? <Pause size={20} className="text-offwhite" /> : <Play size={20} className="text-offwhite ml-1" />}
          </button>
        </div>
      )}
    </div>
  );
}
