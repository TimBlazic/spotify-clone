import React from "react";
import { Button } from "@/components/ui/button";
import { Home, Search, Library, PlusCircle, Heart } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 border-r border-gray-200 dark:border-gray-800 p-5 flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Spotify Notion</h1>
      </div>
      <nav className="space-y-4">
        <Button variant="ghost" className="w-full justify-start">
          <Home className="mr-2 h-4 w-4" />
          Home
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Library className="mr-2 h-4 w-4" />
          Your Library
        </Button>
      </nav>
      <div className="mt-8 space-y-4">
        <Button variant="outline" className="w-full justify-start">
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Playlist
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <Heart className="mr-2 h-4 w-4" />
          Liked Songs
        </Button>
      </div>
      <div className="mt-auto text-sm text-gray-500 dark:text-gray-400">
        <Button variant="link" className="text-xs">
          Legal
        </Button>
        <Button variant="link" className="text-xs">
          Privacy Center
        </Button>
        <Button variant="link" className="text-xs">
          Cookies
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
