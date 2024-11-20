import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import { Input } from "@/components/ui/input";

const TopBar = () => {
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
      <div className="flex-1 max-w-xl mx-8">
        <Input type="search" placeholder="Search" className="w-full" />
      </div>
      <Button variant="ghost" size="icon">
        <User className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default TopBar;
