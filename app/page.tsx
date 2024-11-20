import React from "react";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import ContentArea from "@/components/ContentArea";
import Player from "@/components/Player";

export default function SpotifyNotionHome() {
  return (
    <div className="flex h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <ContentArea />
        <Player />
      </div>
    </div>
  );
}
