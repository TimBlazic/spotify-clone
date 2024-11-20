import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

const ContentArea = () => {
  return (
    <ScrollArea className="flex-1 p-8">
      <h2 className="text-2xl font-semibold mb-4">Good afternoon</h2>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Button
            key={i}
            variant="outline"
            className="h-16 flex items-center justify-start space-x-4"
          >
            <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700" />
            <span>Playlist {i}</span>
          </Button>
        ))}
      </div>
      <h3 className="text-xl font-semibold mb-4">Recently played</h3>
      <div className="grid grid-cols-5 gap-4 mb-8">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="text-center">
            <div className="w-full pb-[100%] bg-gray-300 dark:bg-gray-700 mb-2" />
            <p className="font-medium">Album {i}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Artist {i}
            </p>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default ContentArea;
