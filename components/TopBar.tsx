import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  searchSongs,
  getSpotifyToken,
  getTrackDetails,
} from "@/lib/spotifyApi";

interface Artist {
  name: string;
}

interface Song {
  id: string;
  name: string;
  artists: Artist[];
  albumImageUrl: string;
  previewUrl?: string;
}

interface TopBarProps {
  onSelectSong: (song: Song) => void;
}

const TopBar = ({ onSelectSong }: TopBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSongs, setFilteredSongs] = useState<Song[]>([]);

  useEffect(() => {
    const fetchSongs = async () => {
      if (searchTerm) {
        const songs = await searchSongs(searchTerm);
        setFilteredSongs(songs);
      } else {
        setFilteredSongs([]);
      }
    };

    fetchSongs();
  }, [searchTerm]);

  const handleSelectSong = async (song: Song) => {
    const previewUrl = await getTrackDetails(song.id);
    if (previewUrl) {
      onSelectSong({ ...song, previewUrl });
    } else {
      console.error("No preview URL available for this song.");
    }
    setSearchTerm("");
    setFilteredSongs([]);
  };

  return (
    <div className="h-16 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-8">
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex-1 max-w-xl mx-8 relative">
        <Input
          type="search"
          placeholder="Search"
          className="w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {filteredSongs.length > 0 && (
          <div className="absolute bg-white shadow-lg rounded-md mt-1 w-full z-10">
            {filteredSongs.slice(0, 6).map((song) => (
              <div
                key={song.id}
                className="p-2 hover:bg-gray-200 cursor-pointer flex items-center"
                onClick={() => handleSelectSong(song)}
              >
                <img
                  src={song.albumImageUrl}
                  alt={song.name}
                  className="h-10 w-10 mr-2"
                />
                {song.name} -{" "}
                {song.artists.map((artist) => artist.name).join(", ")}
              </div>
            ))}
          </div>
        )}
      </div>
      <Button variant="ghost" size="icon">
        <User className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default TopBar;
