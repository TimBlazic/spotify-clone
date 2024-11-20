"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import ContentArea from "@/components/ContentArea";
import Player from "@/components/Player";
import { Song } from "@/lib/spotifyApi";

export default function SpotifyNotionHome() {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);

  const handleSelectSong = (song: Song) => {
    setCurrentSong(song);
  };

  return (
    <div className="flex h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar onSelectSong={handleSelectSong} />
        <ContentArea />
        <Player song={currentSong} />
      </div>
    </div>
  );
}
