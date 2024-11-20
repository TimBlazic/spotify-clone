import React from "react";
import { Button } from "@/components/ui/button";
import {
  Shuffle,
  SkipBack,
  Play,
  SkipForward,
  Repeat,
  Volume2,
} from "lucide-react";

const Player = () => {
  return (
    <div className="h-20 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between px-4">
      <div className="flex items-center space-x-4">
        <div className="w-14 h-14 bg-gray-300 dark:bg-gray-700" />
        <div>
          <p className="font-medium">Song Name</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Artist Name
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
        <Button variant="outline" size="icon" className="rounded-full">
          <Play className="h-4 w-4" />
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
