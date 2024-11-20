import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Shuffle,
  SkipBack,
  Play,
  SkipForward,
  Repeat,
  Volume2,
  Pause,
} from "lucide-react";
import { Song } from "@/lib/spotifyApi";

interface PlayerProps {
  song: Song | null;
}

const Player = ({ song }: PlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (song && song.previewUrl) {
      audioRef.current = new Audio(song.previewUrl);
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, [song, isPlaying]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="h-20 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between px-4">
      <div className="flex items-center space-x-4">
        <img src={song?.albumImageUrl} alt={song?.name} className="h-14 w-14" />
        <div>
          <p className="font-medium">{song ? song.name : "No song selected"}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {song ? song.artists.map((artist) => artist.name).join(", ") : ""}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Shuffle className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <SkipBack className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>
        <Button variant="ghost" size="icon">
          <SkipForward className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Repeat className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        <Volume2 className="h-4 w-4" />
        <div className="w-24 h-1 bg-gray-300 dark:bg-gray-700 rounded-full">
          <div className="w-1/2 h-full bg-gray-800 dark:bg-gray-200 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Player;
