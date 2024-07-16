import React from 'react';
import { Button } from "@/components/ui/button"

const DarkPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Dark Side</h1>
        <p className="mb-6 text-gray-300">This page now has a sleek black background.</p>
        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black transition-colors">
          Explore More
        </Button>
      </div>
    </div>
  );
};

export default DarkPage;